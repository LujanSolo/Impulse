const router = require('express').Router();

const { User, AcquiredGoods, LifeEvents } = require('../models/index');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const lifeEventsData = await LifeEvents.findAll();
    const userData = await User.findAll();
    const goodsData = await AcquiredGoods.findAll();

    // Serialize data so the template can read it
    const user = userData.map((user) => user.get({ plain: true }));
    const lifeEvents = lifeEventsData.map((lifeEvents) => lifeEvents.get({ plain: true }));
    const goods = goodsData.map((goods) => goods.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      user, lifeEvents, goods,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] }
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
