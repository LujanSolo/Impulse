const router = require('express').Router();
const { Project, User } = require('../../models');


router.get('/', async (req, res) => {
  //TODO: Add code to find all the projects and the associated users and render homepage
});

router.get('/project/:id', async (req, res) => {
 //TODO: Add code to find one of the projects and the associated user and render project
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
  //TODO: Add code to find the loggedIn user and their associated projects and render profile
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
