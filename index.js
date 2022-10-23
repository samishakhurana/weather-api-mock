const express = require("express");

const path = require("path");

const app = express();

app.get("/data/2.5/weather", (request, response) => {
  if (request.query && request.query.lat && request.query.lon) {
    response.send({
      main: {
        temp: 38.67,
      },
    });
  } else {
    response.send({
      main: {
        temp: 38.67,
      },
    });
  }
});

app.get(`*`, (request, response) => {
  response.sendFile(path.join(__dirname, "/html/404.html"));
});

app.listen("3000", () => {
  console.log("Listening to port 3000");
});
