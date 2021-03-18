'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameAccount extends Model {
    static associate(models) 
    {
      GameAccount.belongsTo(models.User, {
        foreignKey: "user_id"
      });
    } 
  };
  GameAccount.init({
    gametype: DataTypes.INTEGER,
    nickname: DataTypes.STRING(32),
    uid : DataTypes.STRING(32),
    verified : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameAccount',
  });
  return GameAccount;
};