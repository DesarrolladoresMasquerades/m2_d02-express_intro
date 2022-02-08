const express = require("express");

require("dotenv/config");

const app = express();

app.use(express.static("public"));


// This responds to all HTTP verbs
app.all("/home", (request, response) => {
  request.sendFile(__dirname + "/views/home.html");
});

app.all("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
