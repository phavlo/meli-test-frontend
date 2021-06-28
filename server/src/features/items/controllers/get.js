import response from 'express';

import Service from "../services";

//
export const itemsByQuery = async (req, res = response ) => {
    try {
        const items = await Service.itemsByQuery(req.query);
        const author = res.author;

        res.json({
            author,
            ...items
        });
        
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        });
    }
}

//
export const itemById = async (req, res = response ) => {
    try {
        const item = await Service.itemById(req.params);
        const author = res.author;

        res.json({
            author,
            ...item,
        });

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.toString()
        });
    }
}