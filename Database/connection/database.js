//include module mysql downloaded from npm
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

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
*/
module.exports = connection;