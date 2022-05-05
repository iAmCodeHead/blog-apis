const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');


const waitListSchema = mongoose.Schema(
{
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
    phoneNumber: {
        type: String,
        required: true
    },
},{
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
waitListSchema.plugin(toJSON);

/**
 * @typedef WaitList
 */
 const WaitList = mongoose.model('WaitList', waitListSchema);

 module.exports = WaitList;