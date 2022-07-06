const express = require('express');
const loginController = require('../../controllers/loginController');
const loginValidation = require('../../joi/loginSchema');

const router = express.Router();

router.post('/', loginValidation, loginController.login);

module.exports = router;
