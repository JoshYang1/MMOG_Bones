const express = require('express');
//const app = express();
const authenticateController = require('./../controllers/authenticateController');
const registerController = require('./../controllers/registerController');

const router = express.Router();

//router.get('/signup', authenticateController.registerController);
router.post('/signup',registerController.registerController);
//router.get('/login', authenticateController.authenticateController);
router.post('/login', authenticateController.authenticateController)

//export router
module.exports = router;