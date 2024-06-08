// middleware/authorize.js
export const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).send('No tienes permiso para realizar esta acción');
        }
        next();
    };
};