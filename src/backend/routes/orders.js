const express = require('express');
const Order = require('../models/orderModel');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  console.log('Inside orders route');
  try {
    const { userName, userEmail, ...rest } = req.body;
    console.log('Order data received:', { userName, userEmail, ...rest });

    const orderData = {
      ...rest,
      userName,
      userEmail,
    };
    const newOrder = new Order(orderData);
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
});

module.exports = router;
