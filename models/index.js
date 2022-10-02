const User = require('./User');

//* I changed it to ('./AcquiredGood') here to keep with model naming conventions (singular). Same thing with ('./LifeEvent) below - JL
const AcquiredGoods = require('./AcquiredGood');
// const LifeEvents = require('./LifeEvent');


User.hasMany(AcquiredGoods, {
  foreignKey: 'user_id',
});

//*  I think we need to add this Association  -JL
// AcquiredGoods.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.hasMany(LifeEvents, {
  foreignKey: 'user_id',
});

//* uncertain if we need to add a LifeEvents.belongsTo(User) here. if so, i added it and commented it out.-JL
// LifeEvents.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, LifeEvents, AcquiredGoods };