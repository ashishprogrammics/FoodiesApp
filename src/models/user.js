const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    // required: false,
  },
  email: {
    type: String,
    // required: true,
  },
  mobileNumber: {
    type: String,
    // required: true,
  },
  dob: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  created: {
    type: String,
    default: new Date().toISOString(),
  },
  password: {
    type: String,
    // required: true,
  },
  lastActive: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    // required: true,
  },
  token: {
    type: String,
  },
  image: {
    type: String,
    // default: ''
}
});

module.exports = mongoose.model('User', userSchema);
