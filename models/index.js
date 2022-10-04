const User = require('./User');

const AcquiredGoods = require('./AcquiredGood');
const LifeEvents = require('./lifeEvent');

User.hasMany(AcquiredGoods, {
  foreignKey: 'user_id',
});

User.hasMany(LifeEvents, {
  foreignKey: 'user_id',
});

module.exports = { User, LifeEvents, AcquiredGoods };