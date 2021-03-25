const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const config = require('../config/config');


const auth = (req, res, next) => {
  // Get token from header
  const token = req.headers['authorization'];

  // Check if no token
  if (!token) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ msg: "No token, authorization denied" });
  }
  // Verify token
  try {
    const payload = jwt.verify(token, config.jwt.secret);
    req.userId = payload.sub;
    next();
  } catch (err) {
    res
      .status(httpStatus.UNAUTHORIZED)
      .json({ msg: "Token is not valid" });
  }
}

module.exports = {auth};
