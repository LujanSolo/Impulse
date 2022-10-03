const router = require('express').Router();
const { AcquiredGoods } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const goodsData = await AcquiredGoods.findAll();
    console.log(goodsData);
    // const userGoods = goodsData.get({ plain: true });
    res.json(goodsData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const goodsData = await AcquiredGoods.create(req.body);
    res.status(200).json(goodsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;