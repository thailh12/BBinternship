const User = require('../models/User');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require('../config');

function getRandomString(len) {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex')
    .slice(0, len);
}
function hashPass(password) {
  const salt = getRandomString(6);
  const hash = crypto
    .createHash('sha1')
    .update(`${password}${salt}`)
    .digest('hex');
  return { salt, hash };
}
function create(req, res, next) {
  const userAuth = hashPass(req.body.password);
  const { body } = req;
  const user = new User(body);
  user.password = userAuth.hash;
  user.salt = userAuth.salt;
  return user
    .save()
    .then(savedUser => res.json(savedUser))
    .catch(next);
}

function login(req, res, next) {
  const { body } = req;

  return User.findOne({ username: body.username })
    .then(user => {
      if (user === null) throw new Error('Invalid username');
      const hash = crypto
        .createHash('sha1')
        .update(`${body.password}${user.salt}`)
        .digest('hex');
      if (user.password===hash) {
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username
          },
          config.jwtSecret
        );
        return res.json({
          token,
          user: user.username
        });
      } else {
          throw new Error('Invalid password');      }
    })
    .catch(e => res.json(e.message));
}

module.exports = { create, login };
