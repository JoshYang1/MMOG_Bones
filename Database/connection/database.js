//include module mysql downloaded from npm
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
/*
//Create connection to the database
//Have to hide the username and password for security purposes
const connection = mysql.createConnection({
    //creating objects
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });

//create a server object:
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected Database!")
});


/*MySQL query
var sql = "SHOW PROCESSLIST";

// run SQL (variable) query 
connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});


var firstName ="SELECT score FROM players order by score desc limit 1,1;";
var firstScore ="SELECT username FROM players order by score desc limit 0,1;";
var secondName ="SELECT score FROM players order by score desc limit 1,1;";
var secondScore ="SELECT username FROM players order by score desc limit 1,1;";
var thirdName ="SELECT score FROM players order by score desc limit 2,1;";
var thirdScore ="SELECT username FROM players order by score desc limit 2,1;";

connection.query(firstName, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
connection.query(firstScore, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
connection.query(secondName, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
connection.query(secondScore, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
connection.query(thirdName, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
connection.query(thirdScore, function (err, result) {
    if (err) throw err;
    console.log(result);
  });

module.exports = connection;

*/