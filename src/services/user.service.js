const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');
const jwt = require("jsonwebtoken");

const createUser = async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    const user = await User.create(userBody);
    return user;
  };

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
 const getUserById = async (id) => {
    return User.findById({id});
  };

  const getUserByEmail = async (email) => {
    return User.findOne({email});
  };

  module.exports = {
    createUser,
    getUserById,
    getUserByEmail
  };