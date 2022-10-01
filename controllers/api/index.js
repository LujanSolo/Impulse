const router = require('express').Router();
const acquiredGoodsRoutes = require('./acquiredGoodsRoutes');
const lifeEventRoutes = require('./lifeEventRoutes');

router.use('/acquiredGoods', acquiredGoodsRoutes);
router.use('/lifeEventRoutes', lifeEventRoutes);

module.exports = router;
