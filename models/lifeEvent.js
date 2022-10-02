const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LifeEvents extends Model {}

LifeEvents.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    money_change : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dopa_change: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'life_event',
  }
);

module.exports = LifeEvents;
