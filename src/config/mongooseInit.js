import { connect } from "mongoose";

const dbUrl = 'mongodb://localhost:27017/magic-movies';

export default async function mongooseInit(params) {
    
    try {
       await connect(dbUrl)
        console.log('Successfully conected to DB');
        
    } catch (error) {
        console.log('Cannot connect to DB' + err.message);
    }
}