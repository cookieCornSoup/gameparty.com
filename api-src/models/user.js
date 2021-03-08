'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here 
      User.hasMany(models.Post, {
        foreignKey: "posterId"
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