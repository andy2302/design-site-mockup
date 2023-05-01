// routes/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const config = require('../config/default.json');
const auth = require('../middleware/auth');

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, age, gender, phone, facebook, twitter, instagram } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      phone,
      facebook,
      twitter,
      instagram,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const payload = {
        user: {
          id: user.id,
        },
      };
  
      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token, user });
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.put('/:id', auth, async (req, res) => {
    const { firstName, lastName, email, password, age, gender, phone, facebook, twitter, instagram } = req.body;
  
    try {
      const user = await User.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (user.id.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      const updateUserFields = {
        firstName,
        lastName,
        email,
        age,
        gender,
        phone,
        facebook,
        twitter,
        instagram,
      };
  
      if (password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        updateUserFields.password = hashedPassword;
      }
  
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: updateUserFields,
      }, { new: true });
  
      res.json({ message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
 

module.exports = router;
