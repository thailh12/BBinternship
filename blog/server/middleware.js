const jwtSecret = require('./config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

exports.encrypt = function(raw) {
  return bcrypt.hashSync(raw, saltRounds);
};

exports.compare = function(raw, hash) {
  return bcrypt.compareSync(raw, hash);
};

exports.create_token = function(user_id) {
  return jwt.sign(
    {
      user_id,
      expiresIn: token_expiration
    },
    jwtSecret,
    {
      expiresIn: token_expiration
    }
  );
};

exports.verify = function(req, res, next) {
  const token = req.headers.authorization;
  if (!token) throw new Error('unauthorization');
  jwt.verify(token, jwtSecret, err => {
    if (!token) throw new Error(err.message);
  });
  next();
};

exports.decode = function(token) {
  return jwt.decode(token, jwtSecret);
};
