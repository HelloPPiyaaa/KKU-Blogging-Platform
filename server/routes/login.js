// login.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({
        success: true,
        message: 'Login successful!',
        data: {
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: email,
        },
      });
    } else {
      res.json({ success: false, message: 'Invalid email or password.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

module.exports = router;
