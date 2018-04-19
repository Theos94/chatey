const socket = io.connect("http://localhost:4004");

const message = document.getElementById("message");
const username = document.getElementById("username");
const btn = document.getElementById("btn");
const chat = document.querySelector(".chat__list");

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    username: username.value
  });
  message.value = "";
});

message.addEventListener("keypress", () => {
  socket.emit("typing", {
    username: username.value
  });
});

socket.on("chat", ({ username, message }) => {
  chat.innerHTML += `<li> <span>${username} :  </span> ${message}</li>`;
});

// socket.on("typing", ({username}) => {
//   chat.innerHTML += `<li> <span>${username} :  </span> ${message}</li>`;
// })

particlesJS.load("particles-js", "particles.json", () => {
  console.log("Loading json");
});
