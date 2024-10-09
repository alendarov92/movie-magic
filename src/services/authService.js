import User from "../models/User.js";

const createUser = (userData) => User.create(userData)

export default {createUser};
