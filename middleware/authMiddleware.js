import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

const jwtTokenMiddleware = (req, res, next) => {

    const headers = req.headers.authorization;
    const bearer = headers.split(' ');
    const token = bearer[1];

    if (!token) {
        res.status(401);
        return next(new Error('unauthorized'));
    }
    let user_login = {};
    try {
        user_login = jwt.verify(token, process.env.JWT_SECRET);
        req.user_login = user_login
        return next();
    } catch (error) {
        res.send({
            success: false,
            code: 401,
            message: 'Unauthorized',
            body: ''
        });
        return next();
    }
}

export default jwtTokenMiddleware;