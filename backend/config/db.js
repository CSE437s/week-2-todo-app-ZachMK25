import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
//validate the uri MongoDB Atlas from .env
const env = {
    MONGO_DB_ATLAS_URI: process.env.MONGO_DB_ATLAS_URI
}

const connectDB = async () => {
    try {
        //database Name
        const databaseName='week2-app';
        const con = await mongoose.connect(env.MONGO_DB_ATLAS_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;