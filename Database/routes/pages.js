//include express module 
const express = require('express');
const router = express.Router();

//route to the homepage
//request retrieves
//response send to the front end
//will need to create route to the game page
router.get('/', (req, res) => {
    res.render('index');
});

//export router
module.exports = router;
