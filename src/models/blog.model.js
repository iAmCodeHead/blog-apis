const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');

const blogSchema = mongoose.Schema(
{
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
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
blogSchema.plugin(toJSON);

/**
 * @typedef Blog
 */
 const Blog = mongoose.model('Blog', blogSchema);

 module.exports = Blog;