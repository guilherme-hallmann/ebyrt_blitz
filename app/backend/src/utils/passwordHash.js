const bcrypt = require('bcrypt');

const saltRounds = 10;
const hashPw = (pw) => {
  const hash = bcrypt.hashSync(pw, saltRounds);
  return hash;
};

const checkHash = (pw, hashedPw) => {
  const check = bcrypt.compareSync(pw, hashedPw);
  return check;
};

module.exports = {
  hashPw,
  checkHash,
};
