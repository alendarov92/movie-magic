import { JWT_SECRET } from '../config/constants.js';
import jwt from 'jsonwebtoken';


export const authMiddleware = (req, res, next) => {
    // TODO: Check if there is token in the request
    const token = req.cookies['auth'];

    if (!token) {
        return next();
    }
    // TODO: Validate token
    try {
       const decodedToken = jwt.verify(token, JWT_SECRET); 

       req.user = {
        _id: decodedToken._id,
        email: decodedToken.email,
       }

       return next()
    } catch (error) {
        res.clearCookie('auth');

        res.redirect('/auth/login')
    }
    // TODO: Add user data to request
}