const express = require('express');
const userRoute = require('./user');

const router = express.Router();
router.use('/login', userRoute);

module.exports = router;
