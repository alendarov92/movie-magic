import bcrypt from 'bcrypt';
import User from "../models/User.js";
import jwt from 'jsonwebtoken'

const SECRET = 'sdaf6asd98f76sa9d87f6asd897f69a'

const register = (email, password) => {
  // TODO: CHECK IF USER EXIST
    return User.create({email, password})
};

const login = async (email, password) => {
    // TODO: CHECK IF USER EXIST
    const user = await User.findOne({email}); 

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
    const token = jwt.sign(payload, SECRET, {expiresIn: '2h'})


    // TODO: RETURN JWT TOKEN
    return token
}


export default { register,login};
