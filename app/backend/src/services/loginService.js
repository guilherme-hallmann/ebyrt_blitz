const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw errorThrow(409, 'User not found!');
};