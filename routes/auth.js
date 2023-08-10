const express = require('express'); 
const router = express.Router(); 

const { userRegister, userlogin } = require('../controllers/auth');

// For Register
router.post('/register', userRegister);
router.post('/login', userlogin);

module.exports = router; 
