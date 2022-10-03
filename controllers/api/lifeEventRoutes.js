const router = require('express').Router();
const { LifeEvents } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const lifeEventData = await LifeEvents.findAll();
    res.status(200).json(lifeEventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const lifeEventData = await LifeEvents.create(req.body);
    res.status(200).json(lifeEventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//* if we post and delete to this route, it will be so that the player can add their own life event or goods (with delete button)

module.exports = router;
