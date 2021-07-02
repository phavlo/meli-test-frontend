import path from "path";
import fs from 'fs';

import express from "express";
import compression from "compression";
import cors from "cors";
import apicache from 'apicache';

import { authorMiddleware, errorMiddleware } from "./core/middlewares";
import { itemsRouter } from "./features";

import React from 'react';
import ReactDOMServer from 'react-dom/server';

// import App from '../../client/src/App';

const cache = apicache.middleware;

export class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 80;

        const client_path = path.resolve('..', 'client', 'build');
        this.client_path = process.env.CLIENT_PATH || client_path;

        this.middlewares();
        this.routes();
    }
    
    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use(cache('5 minutes'));
        this.app.use(compression());
        this.app.use( authorMiddleware );
        this.app.use( errorMiddleware );
        this.app.use(express.static(this.client_path));
    }

    routes() {
        this.app.use( '/api', itemsRouter);

        // React App
        this.app.get('/*', (_, res) => {
            // Todo
            // const app = ReactDOMServer.renderToString(React.createElement(App));
            
            const indexFile = path.resolve(this.client_path, 'index.html');
            fs.readFile(indexFile, 'utf8', (err, data) => {
                if (err) {
                    console.error('Something went wrong:', err);
                    return res.status(500).send('Oops, better luck next time!');
                }
            
                return res.send(
                    // data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
                    data
                );
            });
        });
    }

    async execute() {
        return this.listen();
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}
