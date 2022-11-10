const router = require('express').Router();
const path = require('path');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
/*router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    const validPassword = await userData.checkPassword(req.body.password);

    res.render('homepage', {
      userData,
      message: 'hey im here',
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});*/

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/blog', async (req, res) => {
  res.render('blog');
});

module.exports = router;
