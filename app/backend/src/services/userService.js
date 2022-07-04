const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
// const generateToken = require('../utils/generateJWT');

const create = async ({ name, email, password }) => {
  const checkEmail = await User.findOne({ where: { email } });
  if (checkEmail) throw errorThrow(409, 'User already registered');
  await User.create({ name, email, password });
  // const token = generateToken(email);
  return 'created with success!';
};

module.exports = {
  create,
};
