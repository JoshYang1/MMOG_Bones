const express = require('express');
//const app = express();
const authenticateController = require('./../controllers/authenticateController');
const registerController = require('./../controllers/registerController');

const router = express.Router();

router.get('/signup', userController.registerController);
router.post('/signup', userController.registerController);
router.get('/login', userController.authenticateController);
router.post('/login', userController.authenticateController)

//export router
module.exports = router;