'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model { 
    static associate(models) { 
        Profile.belongsTo(models.User, {foreignKey : "userId", targetKey : "id" });  
    
      }  
  };

  Profile.init({  
    nickname: DataTypes.STRING,
    age: DataTypes.TINYINT, 
    sex: DataTypes.TINYINT,
    introduce: DataTypes.STRING,
    profile_img : DataTypes.STRING,
    discord_nick : DataTypes.STRING,
    discord_channel : DataTypes.STRING
  }, { 
    sequelize,
    modelName: 'Profile',    
  });
  return Profile;
};  