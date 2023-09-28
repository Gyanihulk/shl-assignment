// Import required modules
const serverless = require('serverless-http');
const express = require('express');
const { connectToDatabase } = require('./config'); // Import the connectToDatabase function from your config module
const bodyParser = require('body-parser');
const cors = require('cors');
// Create an Express application
const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
// Connect to the MongoDB database
connectToDatabase();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Error handling middleware
app.use(async (req, res, next) => {
  try {
    next();
  } catch (error) {
    // Handle errors related to MongoDB connection
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Import your routes from the "routes" module
const Routes = require("./routes");

// Use the imported routes at the root path
app.use("/", Routes);

// Export the Express app wrapped with the serverless function for AWS Lambda
module.exports.handler = serverless(app);
