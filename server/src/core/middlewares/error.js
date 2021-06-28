export const errorMiddleware = (err, req, res, next) => {
    res.status(400).json({
        error: true,
        message: err.message
    });
};
