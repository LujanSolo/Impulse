const User = require('./User');
const AcquiredGoods = require('./AcquiredGoods');
// const LifeEvents = require('./LifeEvents');


User.hasMany(AcquiredGoods, {
  foreignKey: 'user_id',
});

User.hasMany(LifeEvents, {
  foreignKey: 'user_id',
});

module.exports = { User, LifeEvents, AcquiredGoods };