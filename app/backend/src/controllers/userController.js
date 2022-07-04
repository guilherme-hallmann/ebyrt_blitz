const userService = require('../services/userService');

const create = async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  const token = await userService.create(name, email, password);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
