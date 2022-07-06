const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const status = await loginService.login(req.body);
    res.status(200).json({ status });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};
