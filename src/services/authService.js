import bcrypt from 'bcrypt';
import User from "../models/User.js";

const register = (userData) => {
  // TODO: CHECK IF USER EXIST
    return User.create(userData)
};

const login = async ({email, password}) => {
    // TODO: CHECK IF USER EXIST
    const user = await User.findOne(userData.email);

    if (!user) {
        throw new Error('User dosent exist!')
    }

    // TODO: VALIDATE PASSWORD
    const isValid = bcrypt.compare(password, user.password)

    if (!isValid) {
        throw new Error('Password dosent match!');
        
    }
    // TODO: GENERATE JWT TOKEN

    // TODO: RETURN JWT TOKEN
}


export default { register,login};
