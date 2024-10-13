const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize express and dotenv
dotenv.config();
const app = express();

// Middleware for parsing JSON and handling CORS
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from your frontend

// MongoDB connection string
const db = 'mongodb+srv://shreyaganjoo:iATblM53nqy7Xp9o@cluster0.8rpdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Server port configuration
const PORT = process.env.PORT || 5000;

// Initialize MongoDB connection and start the server
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB successfully");

        // Start the server after successful DB connection
        app.listen(PORT, () => {
            console.log(`Server running successfully on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
    });
