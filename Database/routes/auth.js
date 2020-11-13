//include express module 
const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

//only able to access with POST
//auth/register
router.post('/register', authController.register);
//auth/login
router.post('/login', authController.login);

//export router
module.exports = router;
