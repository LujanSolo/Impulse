const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//* /api routes for CRUD operations and GET json objects
router.use('/api', apiRoutes);

//* / for all handlebars (HTML)
router.use('/', homeRoutes);

module.exports = router;
