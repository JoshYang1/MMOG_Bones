//include module mysql downloaded from npm
const mysql = require('mysql');

//include express module
const express = require('express');

const session = require('express-session');
const path = require('path');
var bodyParser = require('body-parser');

var connection = require('./connection/database');
const router = require('./routes/post');

var app = express();

//This body-parser module parses the JSON, buffer, string and url encoded data submitted using HTTP POST request
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// login routes get post
app.use(router);

//sessions package is what is used to determine if the user is logged-in
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));
*/

app.get('/', function (req, res) {  
  res.sendFile( __dirname + "/" + "Bones.html" );  
})  

app.get('/Bones.html', function (req, res) {
    res.sendFile(__dirname +'/' + 'Bones.html')
});

app.listen(8012);



//make the app listen on port 
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {

console.log(`Server is running on http://localhost:${port}`);
});

