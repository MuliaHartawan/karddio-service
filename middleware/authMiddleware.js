import dotenv from 'dotenv';
import { jwt } from "jsonwebtoken";

dotenv.config();

const jwtTokenMiddleware = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        res.status(401);
        return next(new Error('Unauthorized'));
    }

    let user_login = {};
    try {
        user_login = jwt.verify(token, process.env.JWT_SECRET);
        req, user_login = user_login
        return next();
    } catch (error) {
        res.status(401);
        return next(new Error(error.message));
    }
}