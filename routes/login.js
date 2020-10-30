const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { loginValidation } = require('../validation');

router.post('/', async (req, res) => {
  // Data validation
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if the email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send('User or password are invalid!');
  }

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(401).send('User or password are invalid!');
  }

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 60 * 30,
  });
  res.header('auth-token', token).send(token);

  //Update logged in date
  User.findOneAndUpdate({}, { lastLoginDate: Date.now() }, (err, result) => {
    if (error) {
      return res.send('Invalid email');
    } else {
      return console.log('Logged in!');
    }
  });
});

module.exports = router;
