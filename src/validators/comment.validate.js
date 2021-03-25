const Joi = require('joi');
const { objectId } = require('./custom.validator');

const makeComment = {
    params: Joi.object().keys({
        postId: Joi.string().required().custom(objectId),
    }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    body: Joi.string().required(),
  }),
};

const getComments = {
  params: Joi.object().keys({
    postId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
    makeComment,
    getComments
};
