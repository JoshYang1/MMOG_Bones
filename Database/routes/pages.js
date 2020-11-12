//include express module 
const express = require('express');
const router = express.Router();

//const authenticateController = require('../controllers/authenticateController');
//const registerController = require('../controllers/registerController');

//route to the homepage
//request retrieves
//response send to the front end
//will need to create route to the game page
router.get('/', (req, res) => {
    res.render('index');
})

//export router
module.exports = router;


//router.post('/signup',registerController.registerController);
//router.get('/login', authenticateController.authenticateController);
//router.post('/login', authenticateController.authenticateController)


