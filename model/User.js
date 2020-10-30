const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  phone: {
    type: Number,
    required: false,
    min: 11,
  },
  createDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updateDate: {
    type: Date,
    default: Date.now,
  },
  lastLoginDate: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model('User', userSchema);
