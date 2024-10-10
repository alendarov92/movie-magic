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

       const user = {
        _id: decodedToken._id,
        email: decodedToken.email,
       }

       req.user = user
       res.locals.userId = user._id
       res.locals.userEmail = user.email
       res.locals.isAuthenticated = true

       return next()
    } catch (error) {
        res.clearCookie('auth');

        res.redirect('/auth/login')
    }
    // TODO: Add user data to request
}