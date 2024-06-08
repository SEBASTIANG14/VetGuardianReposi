import jwt from 'jsonwebtoken';
import { getUserById } from '../controllers/login.controllers.js';

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = await getUserById(decoded.id);
        next();
    } catch (err) {
        return res.sendStatus(403);
    }
};