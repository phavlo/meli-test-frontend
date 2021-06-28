import validator from "express-validator";

const { validationResult } = validator;

export const validationErrors = ( req, res, next ) => {
    const errors = validationResult(req);

    if( !errors.isEmpty() ){
        return res.status(422).json({
            success: false,
            errors: errors.array()
        });
    }

    next();
}