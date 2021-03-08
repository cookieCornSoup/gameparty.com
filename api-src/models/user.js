'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here 
      User.hasMany(models.Post, {
        foreignKey: "posterId"
      });
      
      //게임 어카운트 관계설정
      User.hasMany(models.GameAccount, {
        foreignKey: "user-id"
      });


      User.hasOne(models.Profile, {foreignKey: "userId", sourceKey: "id"});
    } 
  };
  User.init({
    email: DataTypes.STRING(32),
    password: DataTypes.STRING(128),
    salt: DataTypes.STRING(32)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};