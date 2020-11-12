//include express module and start server
const express = require('express');
const app = express();

//include default path node.js package
const path = require('path');

//need to change ./public to location of homepage
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//This parses the JSON, buffer, string and url encoded data submit
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//handlebar node.js package
app.set('view engine', 'hbs');

//define routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));

//listen to port 3050
app.listen(3050, () => {
  console.log("Server is running on port 3050");
})

