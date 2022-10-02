const sequelize = require('../config/connection');
const { User, AcquiredGoods, LifeEvents } = require('../models');

const acquiredGoodsData = require('./userData.json');
const lifeEventsData = require('./lifeEvents.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: false }); //? was this true or false to begin with?

  const acquiredGoods = await AcquiredGoods.bulkCreate(acquiredGoodsData, {
    individualHooks: true,
    returning: true,
  });

  const lifeEvents = await LifeEvents.bulkCreate(lifeEventsData, {
    individualHooks: true,
    returning: true,
  });

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
