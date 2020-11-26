//include express module 
const express = require('express');
const router = express.Router();

//route to the homepage
//request retrieves
//response send to the front end
router.get('/', (req, res) => {
    res.render('index');
});

//route to gamepage
router.get('/game', (req, res) => {
    res.render('game');
});

//export router
module.exports = router;
