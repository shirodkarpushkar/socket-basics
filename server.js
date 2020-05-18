var express = require("express");
var app = express();
var http = require("http").Server(app);
var PORT = process.env.PORT || 3000;
var io = require("socket.io")(http);
var moment = require("moment");
var clientInfo = {};
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("user conected on socket");
  socket.on("joinRoom", (req) => {
    clientInfo[socket.id] = req;
    socket.join(req.room);
    socket.broadcast.to(req.room).emit("message", {
      name: "System",
      text: req.name + " has joined!",
      timestamp: moment().valueOf(),
    });
  });
  socket.on("message", (message) => {
    console.log("Message recieved: " + message.text + " from " + message.name);
    message.timestamp = moment().valueOf();
    io.to(clientInfo[socket.id].room).emit("message", message);
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
