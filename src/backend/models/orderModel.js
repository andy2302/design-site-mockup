const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
