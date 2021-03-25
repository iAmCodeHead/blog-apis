const Joi = require('joi');
const { objectId } = require('./custom.validator');

const makeComment = {
  body: Joi.object().keys({
    postId: Joi.string().custom(objectId),
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    body: Joi.string().required(),
  }),
};

const getComments = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

module.exports = {
    makeComment,
    getComments
};
