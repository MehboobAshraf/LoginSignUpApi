    
var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

// Register user
router.post('/register', controller.register);

// Authenticate user
router.post('/login', controller.login);

module.exports = router;