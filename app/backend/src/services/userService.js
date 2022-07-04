const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
// const generateToken = require('../utils/generateJWT');

const create = async ({ name, email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (user) throw errorThrow(409, 'User already exists!');
  await User.create({ name, email, password });
};

module.exports = {
  create,
};
