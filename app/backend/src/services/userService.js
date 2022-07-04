const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');

const create = async ({ name, email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (user) throw errorThrow(409, 'User already exists!');
  const { id } = await User.create({ name, email, password });
  const token = generateToken({ id, name, email });
  return token;
};

module.exports = {
  create,
};
