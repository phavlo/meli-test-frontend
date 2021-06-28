export const authorMiddleware = (req, res, next) => {
    res.author = {
        name: 'Pablo',
        lastname: 'Ramos'
    };
    next();
};
  