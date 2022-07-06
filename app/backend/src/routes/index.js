const express = require('express');
const userRoute = require('./user');
const loginRoute = require('./login');

const router = express.Router();
router.use('/user', userRoute);
router.use('/login', loginRoute);

module.exports = router;
