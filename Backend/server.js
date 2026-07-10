

require('dotenv').config(); // Load environment variables from a .env file into process.env
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Set custom DNS servers for resolving domain names

const express = require('express');// Import the Express library to create a web server
const mongoose = require('mongoose'); // Import the Mongoose library to interact with MongoDB
const cors = require('cors'); // Import cors middleware

const port = process.env.PORT || 5000;
const mongoDBUrl = process.env.MONGODB_URL; // Get the MongoDB connection URL from environment variables
const app = express();

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON request bodies into req.body

// When someone visits the API data endpoint, send a JSON response

app.get('', (req, res) => {
  res.send("Hello from the backend!");
});

app.get('/api/data', (req, res) => {
  res.send({
    "name": "redwood"
  });
});

app.get('/api/userData', (req, res) => {
  res.send({
    "name": "Suraj"
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const woodRoutes = require('./routes/woods'); // Import the wood routes from the routes/woods.js file
app.use('/api/woods', woodRoutes); // Use the wood routes for any requests starting with /api/woods

const userRoutes = require('./routes/users'); // Import the user routes from the routes/users.js file
app.use('/api/users', userRoutes); // Use the user routes for any requests starting with /api/users

const authRoutes = require('./routes/auth'); // Import the authentication routes from the routes/auth.js file
app.use('/api/auth', authRoutes); // Use the authentication routes for any requests starting with /api/auth

mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  }); 
