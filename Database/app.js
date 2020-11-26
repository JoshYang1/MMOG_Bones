var ip = require("ip");
var express = require("express");
var app = express();

//Static resources server
app.use(express.static(__dirname + "/www"));

var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("Server running at port %s", port); //
});

var io = require("socket.io")(server);


// server keeps centralized track of game data
var users = {};

/* Connection events */
io.on("connection", function (socket) {
  console.log("User connected");

  socket.on("update", (data) => {
    let curTimeStamp = Date.now();

    let uniqueid = data.uniqueid; //

    if (!users.hasOwnProperty(uniqueid)) {
      users[uniqueid] = {};
      users[uniqueid].uniqueid = uniqueid;
      users[uniqueid].timestamp = curTimeStamp;
      users[uniqueid].socketid = socket.id;
      users[uniqueid].ip = ip.address();
      users[uniqueid].x = data.x;
      users[uniqueid].y = data.y;
    }

    users[uniqueid].uniqueid = uniqueid;
    users[uniqueid].timestamp = curTimeStamp;
    users[uniqueid].socketid = socket.id;
    users[uniqueid].ip = ip.address();
    users[uniqueid].x = data.x;
    users[uniqueid].y = data.y;

    let senddata = {
      cmd: "sync",
      timestamp: curTimeStamp,
      users: []
    };
    for (let uid in users) {
      let delay = curTimeStamp - users[uid].timestamp;
      if (delay > 5000) {
        console.log("killing unique: " + uniqueid + ", timed out");
        delete users[uid];
        continue;
      }
      senddata.users.push(users[uid]);
    }

    socket.emit("sync", senddata);
    socket.broadcast.emit("sync", senddata);
  });
});

//include express module and start server
const express = require('express');
const app = express();
//importing cookie parser package
const cookieParser = require("cookie-parser");

//include default path node.js package
const path = require('path');

//need to change ./public to location of homepage
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//This parses the JSON, buffer, string and url encoded data submit
app.use(express.urlencoded({extended : false}));
app.use(express.json());
//running cookies
app.use(cookieParser());

//handlebar node.js package
app.set('view engine', 'hbs');

//define routes
//redirecting to other files
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use('/game', require('./routes/pages'));

//listen to port 3050
app.listen(3050, () => {
  console.log("Server is running on port 3050");
})

