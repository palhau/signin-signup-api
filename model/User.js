const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: false,
    min: 9,
  },
  ddd: { type: Number, required: false, min: 2 },
});

module.exports = mongoose.model('Phones', phoneSchema);

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
  phones: [phoneSchema],
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
