const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const {
      name, email, password,
    } = req.body;
    const token = await userService.create(name, email, password);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
