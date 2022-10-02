const router = require('express').Router();
const { AcquiredGoods } = require('../../models');

//* player lands on square, triggers two fetch requests to say
//*    go GET a random item from the AcquiredGoods json AND
//*    go GET a random item from the LifeEvents json
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


// * FOR REFERENCE:
// function selectThree(results) {
//   //* we are putting the original api array results into an entirely new array below (bucket) so we can pull from it without altering the original array. 
//   const selectsCopy = [...results];
//   const bucket = [];

//   //*Our forEach function on this 3 item array. So the [1,2,3] and (ii) are meaningless; just placeholders.
//   [1, 2, 3].forEach(function (ii) {
//     const selectedRandom = Math.floor(Math.random() * selectsCopy.length) + 1; //*selects copy.length is being evaluated after we do the splice; making it a value that changes every time we go thru the array
//     const randomGames = selectsCopy.splice(selectedRandom, 1);
//     bucket.push(randomGames[0]); //*the results get pushed into our BUCKET array
//     console.log("randomGame", randomGames);
//   })
//   console.log(bucket);
//   return bucket;