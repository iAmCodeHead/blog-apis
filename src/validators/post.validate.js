const Joi = require('joi');
const { objectId } = require('./custom.validator');

const createPost = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    body: Joi.string().required(),
  }),
};

const updatePost = {
    params: Joi.object().keys({
        postId: Joi.string().required().custom(objectId),
    }),
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      body: Joi.string().required(),
    }),
};

const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().required().custom(objectId),
  }),
};

const deletePost = {
    params: Joi.object().keys({
      postId: Joi.string().required().custom(objectId),
    }),
  };

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost
};
