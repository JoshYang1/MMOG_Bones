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
