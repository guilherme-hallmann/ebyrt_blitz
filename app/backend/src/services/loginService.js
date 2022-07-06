const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');
const { checkHash } = require('../utils/passwordHash');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw errorThrow(404, 'User not found!');
  const pwValidation = await checkHash(password, user.password);
  if (!pwValidation) throw errorThrow(401, 'Invalid password!');
  const token = generateToken({ id: user.id, name: user.name, email: user.email });
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    },
  };
};

module.exports = {
  login,
};
