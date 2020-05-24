// Import the packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create an instance for express
const app = express();

// Get the person routes
const person = require('./routes/person');
const atendimento = require('./routes/atendimento');

// Apply the bodyParser middleware, to get json data from requests (Body)
app.use(bodyParser.json());

// Apply the routes of /api/person
app.use('/api/person', person);

app.use('/api/atendimento', atendimento);

// Get the mongoURI for database
const db = require('./config/keys').mongoURI;

// Connecting with database
mongoose
  .connect(db, { useNewUrlParser: true })
  // If all run ok, console log the message
  .then(() => console.log('MongoDB connected'))
  // For console log any error
  .catch(err => console.log(err));

// Port declaration
const port = process.env.PORT || 9000;

// Init the express.js server
app.listen(port, () => console.log(`Server running on ${port}`));
