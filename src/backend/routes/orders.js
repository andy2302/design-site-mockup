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

// Add a new route to get all orders
router.get('/all', authMiddleware, async (req, res) => {
  console.log('Fetching all orders');
  try {
    const orders = await Order.find({});
    console.log('Orders fetched:', orders);
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

router.patch('/:orderId', authMiddleware, async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status', error: error.message });
  }
});


module.exports = router;
