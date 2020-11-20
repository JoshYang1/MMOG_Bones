const dotenv = require('dotenv');
const connection = require('../connection/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

dotenv.config();

module.exports.register = (req, res) => {
    console.log(req.body);
    //setting variables based on the name from the html form in unstuctured form
    const { username, email, password, passwordConfirm } = req.body;

    connection.query('SELECT email FROM players WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('index', {
                message: 'Account registered with this e-mail already.',
                messageClass: 'alert-danger'
            })
        } else if (password !== passwordConfirm) {
            return res.render('index', {
                message: 'Passwords do not match.'
            });
        }
        //encrypt password 8 times
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        connection.query('INSERT INTO players SET ?', {username: username, email: email, password: hashedPassword}, (error, results) => {
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('index', {
                    message: 'User Registered'
                })
            }
        })
    });
}

module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        connection.query('SELECT * FROM players WHERE email = ?', [email], async (error, results) => {
            console.log(results);
            //if no results from database or password is wrong 
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
            res.status(401).render('index', {
                message: 'The e-mail or password is incorrect.'
            })
        } else {
            const id = results[0].id;
            //creating a cookie
            const token = jwt.sign({id}, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            console.log("The token is: " + token);

            const cookieOptions = {
                expires: new Date(
                Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions);
        res.status(200).redirect("/game");
    }
    })
    } catch (error) {
        console.log(error);
    }
}