const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ payload }, jwtSecret, jwtConfig);
  return token;
};

module.exports = generateJWT;
