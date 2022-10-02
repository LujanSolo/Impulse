const router = require('express').Router();
const acquiredGoodsRoutes = require('./acquiredGoodsRoutes');
const lifeEventRoutes = require('./lifeEventRoutes');
const userRoutes = require('./userRoutes');

router.use('/acquiredGoods', acquiredGoodsRoutes);
router.use('/lifeEventRoutes', lifeEventRoutes);
router.use('/userRoutes', userRoutes);

module.exports = router;
