// Setup empty JS object to act as endpoint for all routes
projectData = {};
const weatherData = [];

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));
const port = 3030;

// Setup Server
const server = app.listen(port, listening);

function listening() {
  console.log(`running on localhost: ${port}`);
}

// Respond with JS object when a GET request is made to the homepage
app.post("/addWeather", addWeather);

function addWeather(req, res) {
  newWeather = {
    date: req.body.date,
    temp: req.body.temp,
    feel: req.body.feel,
  };
  weatherData.push(newWeather);
  res.send(weatherData);
}

app.get("/all", getAll);

function getAll(req, res) {
  res.send(weatherData);
}
