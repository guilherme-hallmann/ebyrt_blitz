const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');
const { hashPw } = require('../utils/passwordHash');

const create = async (data) => {
  const { name, email } = data;
  const user = await User.findOne({ where: { email } });
  if (user) throw errorThrow(409, 'User already exists!');
  const password = hashPw(data.password);
  const { id } = await User.create({ name, email, password });
  const token = generateToken({ id, name, email });
  return token;
};

module.exports = {
  create,
};
