const userService = require('../services/userService');

const create = async (req, res) => {
  const token = await userService.create(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  create,
};
