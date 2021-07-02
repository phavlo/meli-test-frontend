import Router from 'express';
import { check } from 'express-validator';

import { itemById, itemsByQuery } from "../controllers";
import { validationErrors } from "../../../core/middlewares";

const router = Router();

// 
router.get('/items', [
    check('q').not().isEmpty().withMessage(":q cannot be empty"),
    validationErrors
], itemsByQuery );

//
router.get('/items/:id',[
    check('id').not().isEmpty().withMessage(":id cannot be empty"),
    validationErrors
], itemById );

export default router;
