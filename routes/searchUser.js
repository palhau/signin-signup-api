const router = require('express').Router();
const User = require('../model/User');
const verify = require('../middlewares/verifyToken');

router.get('/:userEmail', verify, (req, res) => {
  User.findOne({ email: req.params.userEmail })
    .then((user) => {
      user === null && res.status(404).send('User not Found!');
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error ocurred while retrieving the user.',
      });
    });
});

module.exports = router;
