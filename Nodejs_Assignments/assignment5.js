const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

function logMethodUrl(req, res, next){
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next(); // move on to next task
}

// Middleware to parse JSON requests and declare as global for every request it runs
app.use(bodyParser.json());
app.use(logMethodUrl)

// demo data for users
const users = [
  { id: 7, name: "MS Dhoni", email: "ms@example.com" },
  { id: 18, name: "Virat Kohli", email: "virat@example.com" },
  { id: 45, name: "Rohit Sharama", email: "rohit@example.com" },
];

// GET / - Welcome route

app.get("/external-posts", async(req, res)=>{
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com");
    res.send(response.data);
  }
  catch(error){
    console.log("Error occur during fetching external data...", error.message);
  }
});


app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

// POST /data - Accept JSON data
app.post("/data", (req, res) => {
  const receivedData = req.body;
  console.log("Data received:", receivedData);
  res.send("Data received.");
});

// GET /users - Respond with a list of users
app.get("/users", (req, res) => {
  res.json(users); // Send the users array as a JSON response
});
// invalid route or path and place at last because first it run all middleware for valid path then it execute 
// 404 page not found  middleware 
app.use((req, res, next)=>{
  res.status(404).send("This Page not available...");
});
// generic error handling 
app.use((err, req, res, next)=>{
  console.log("Error Occur");
  res.status(500).send("Something went wrong...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
