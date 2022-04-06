import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://pranay404:prakruti@cluster0.y3tsi.mongodb.net/test', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`MongoDB Connected! with ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)

    }
}

export default connectDB