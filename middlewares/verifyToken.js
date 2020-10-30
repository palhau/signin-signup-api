const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  let current_time = Date.now() / 1000;
  !token && res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET, {
      expiresIn: current_time,
    });
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Access Denied');
  }
};
