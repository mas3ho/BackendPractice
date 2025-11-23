import dotenv from 'dotenv'; 
import connectDB from './config/database.js';
import app from './app.js';

dotenv.config({
    path: './.env'
});// Load environment variables from .env file

const startServer = async() => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    } catch (error) {
        console.error('MongoDB connection failed', error);
        process.exit(1);
    }
};

startServer();