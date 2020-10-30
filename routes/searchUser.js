const router = require('express').Router();
const User = require('../model/User');
const verify = require('../middlewares/verifyToken');

router.get('/:userEmail', verify, async (req, res) => {
  User.findOne({ email: req.params.userEmail })
    .then((user) => {
      if (user === null) {
        return res.status(404).send('User not Found!');
      }
      return res.json(user);
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message || 'Some error ocurred while retrieving the user.',
      });
    });
});

module.exports = router;
