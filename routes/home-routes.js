const router = require('express').Router();

// GET homepage
router.get('/', async (req, res) => {
  try {
    res.send('Hello World')
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.send('login');
});

module.exports = router;
