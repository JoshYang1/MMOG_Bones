//include express module 
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');
//const registerController = require('../controllers/registerController');

//only able to access with POST
//auth/register

router.post('/register', authController.register)


//export router
module.exports = router;


//router.post('/signup',registerController.registerController);
//router.get('/login', authenticateController.authenticateController);
//router.post('/login', authenticateController.authenticateController)


