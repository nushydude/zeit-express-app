const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3003;

// Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to a basic express App");
});

// Home route
app.post("/purchase", (req, res) => {
  console.log("Got body:", req.body);
  res.send("Got body");
});

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is running on port 3000. Visit http://localhost:3000`);
});
