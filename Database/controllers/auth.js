exports.register = (req, res) => {
    console.log(req.body);
    res.send("Form submitted");
}


/*var connection = require('./../connection/database');

const authController = function (request, response) {
    var email=req.body.email;
    var password=req.body.password;

    if (username && password) {
// check if user exists
        connection.query('SELECT * FROM players WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.email = email;
                //response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
            }           
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
});

    loginServices.loginService(pseudoname, email, function(err, oldy, user) {
        console.log("User from login service :" + JSON.stringify(user));
        if (user === null) {
            console.log("Auhtentication problem!");
            response.json(null);
        } else {
            console.log("Auhtentication went through!");
            if (oldy === true) {
                console.log(`Hello ${pseudoname}, welcome back!`);
            } else {
                console.log(`Hello ${pseudoname}, you have been registred!`);
                console.log(`Your id is ${user.id}!`);
            }
            response.json({ old: oldy, obj: user });
        }
        response.end();
        next();
    });
};

const getUsers = (request, response) => {
    const loginServices = require('../services/userServices');
    loginServices.searchService(function(err, rows) {
        response.json(rows);
        response.end();
    });
};

const getUserByID = (request, response) => {
    const loginServices = require('../services/userServices');
    let id = request.params.id;
    loginServices.searchIDService(id, function(err, rows) {
        response.json(rows);
        response.end();
    });
};

module.exports = auth;
*/