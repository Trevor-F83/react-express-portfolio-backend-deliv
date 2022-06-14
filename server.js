
// Dependencies
const express = require("express");
const cors = require("cors");

// JSON
const projects = require("./projects.json");
const about = require("./about.json");

// Create app object
const app = express();

// Set up middleware
app.use(cors());

// Home route for testing
app.get("/", (req, res) => {
    res.send("Jello World");
});

// Route for retrieving projects
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects);
});

// Route for retrieving about info
app.get("/about", (req, res) => {
    res.json(about);
});

// Declare a varible for our port number
const PORT = process.env.PORT || 4000;

// Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));