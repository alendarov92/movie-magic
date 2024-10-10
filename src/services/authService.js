import bcrypt from 'bcrypt';
import User from "../models/User.js";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/constants.js';

const register = (email, password) => {
    // TODO: CHECK IF USER EXIST
    return User.create({ email, password })
};

const login = async (email, password) => {
    // TODO: CHECK IF USER EXIST
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User dosent exist!')
    }

    // TODO: VALIDATE PASSWORD
    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error('Password dosent match!');
    };

    // TODO: GENERATE JWT TOKEN
    const payload = {
        _id: user._id,
        email
    }
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' })


    // TODO: RETURN JWT TOKEN
    return token
}


export default {
    register,
    login
};
