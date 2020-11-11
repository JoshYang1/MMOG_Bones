var connection = require('./../connection/database');

const registerController = async function(req,res){
    //const password = req.body.password;
    //const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password
     }
    
    connection.query('INSERT INTO players SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
          status:false,
          message:'error ocurred'
        })
      } else {
        res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
            });
        }
    });
  }