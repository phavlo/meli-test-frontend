import Router from 'express';
import validator from 'express-validator';

import { itemById, itemsByQuery } from "../controllers";
import { validationErrors } from "../../../core/middlewares";

const router = Router();
const { check } = validator;

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
