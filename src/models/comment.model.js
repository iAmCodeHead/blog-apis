const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');


const commentSchema = mongoose.Schema(
{
    postId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Blog',
        required: true,
      },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
              throw new Error('Invalid email');
            }
          },
      },
    body: {
        type: String,
        required: true
    }
},{
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);

/**
 * @typedef Comment
 */
 const Comment = mongoose.model('Comment', commentSchema);

 module.exports = Comment;