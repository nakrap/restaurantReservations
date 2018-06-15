// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "hotels.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  // Displays all characters
  app.get("/api/waitingData", function(req, res) {
    return res.json(waitingArray);
  });
  
  // Displays a single character, or returns false
  app.get("/api/waitingArray/:character", function(req, res) {
    var chosen = req.params.character;
  
    console.log(chosen);
  
    for (var i = 0; i < waitingArray.length; i++) {
      if (chosen === waitingArray[i].routeName) {
        return res.json(waitingArray[i]);
      }
    }
  
    return res.json(false);
  });

  app.get("/api/tableArray/:character2", function(req, res) {
    var chosen = req.params.character2;
  
    console.log(chosen);
  
    for (var i = 0; i < tableArray.length; i++) {
      if (chosen === tableArray[i].routeName) {
        return res.json(tableArray[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/waitingArray", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    waitingArray.push(newcharacter);
  
    res.json(newcharacter);
  });

  // Create New Characters - takes in JSON input
app.post("/api/tableArray", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcharacter2 = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newcharacter2.routeName = newcharacter2.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter2);
  
    tableArray.push(newcharacter2);
  
    res.json(newcharacter2);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  