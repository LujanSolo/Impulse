const router = require('express').Router();
const { AcquiredGoods } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const goodsData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!goodsData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(goodsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
