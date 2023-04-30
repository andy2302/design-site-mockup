// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  gender: String,
  phone: String,
  facebook: String,
  twitter: String,
  instagram: String,
});

module.exports = mongoose.model('User', UserSchema);
