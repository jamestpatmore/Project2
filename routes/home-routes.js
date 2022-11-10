const router = require('express').Router();
const path = require('path')

// GET homepage
router.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(root, '/index2.html'))
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
