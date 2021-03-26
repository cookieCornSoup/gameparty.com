'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Recruit extends Model { 
      static associate(models) { 
          Recruit.belongsTo(models.User, {foreignKey : "userId", targetKey : "id" });   
        }  
    };
  
    Recruit.init({  
        title: DataTypes.STRING,           //제목
        description: DataTypes.STRING,  //모집글 설명
        gametype: DataTypes.INTEGER,  // 게임타입
        matchtype: DataTypes.INTEGER,
        game_skills: DataTypes.INTEGER// 유저의 실력
    }, { 
      sequelize,
      modelName: 'Recruit',    
    });
    return Recruit;
  };  