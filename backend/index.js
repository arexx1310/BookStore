import express from "express";
import mongoose from "mongoose";
import { PORT, mongoURL } from "./config.js";
import bookRoute from './routes/booksRoutes.js';
import cors from 'cors';
import path from 'path'; // NEW
import { fileURLToPath } from 'url'; // NEW

const app = express();

// Logic to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(cors());
// OR your custom config:
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

// NEW: Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', bookRoute);

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });