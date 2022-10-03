const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AcquiredGoods extends Model {}

AcquiredGoods.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    url: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'acquired_good',
  }
);

module.exports = AcquiredGoods;
