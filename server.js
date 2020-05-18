var express = require("express");
var app = express();
var http = require("http").Server(app);
var PORT = process.env.PORT || 3000;
var io = require("socket.io")(http);
var moment = require("moment");

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("user conected on socket");

  socket.on("message", (message) => {
    console.log("Message recieved: " + message.text + " from " + message.name);
    message.timestamp = moment().valueOf();

    io.emit("message", message);
  });
  socket.emit("message", {
    text: "Welcome to chat Application!",
    timestamp: moment().valueOf(),
    name: "System",
  });
});

http.listen(PORT, () => {
  console.log("Server Started at PORT:", PORT);
});
