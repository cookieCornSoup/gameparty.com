'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      User.hasMany(models.Post, {
        foreignKey: "posterId"
      });
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