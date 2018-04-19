const express = require("express");
const path = require("path");
const socket = require("socket.io");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(4004, () => console.log(`Listening on port 4004`));

const io = socket(server);

io.on("connection", socket => {
  console.log("Connected to Socket");

  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });

  // This is for implementing who is typing later on.
  // socket.on("typing", data => socket.broadcast.emit("typing", data));
});
