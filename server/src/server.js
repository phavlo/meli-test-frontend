import path from "path";

import express from "express";
import compression from "compression";
import cors from "cors";
import apicache from 'apicache';

import { authorMiddleware, errorMiddleware } from "./core/middlewares";
import { itemsRouter } from "./features";

const cache = apicache.middleware;

export class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 3001;

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
        this.app.get('*', (_, response) => {
            const filePath = path.resolve(this.client_path, 'index.html');
            response.sendFile(filePath);
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
