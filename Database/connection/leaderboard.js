var firstName ="SELECT username FROM players JOIN (SELECT distinct score score3 FROM players ORDER BY score DESC LIMIT 2, 1) x ON highscore >= score3 ORDER by highscore DESC ;";
var firstScore ="";
var secondName ="SELECT score FROM players order by score desc limit 1,1";
var secondScore ="SELECT name FROM players order by score desc limit 1,1";
var thirdName ="";
var thirdScore ="";
