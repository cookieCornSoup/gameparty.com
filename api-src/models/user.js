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

 
      //유저는 하나의 프로필만 가지므로 hasOne으로 설정
      User.hasOne(models.Profile, {foreignKey: "userId", sourceKey: "id"});

      //유저는 여러 사람을 칭찬할 수 있음
      User.hasMany(models.Like, {foreginKey:"likerId", sourceKey:"id" });
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