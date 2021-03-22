'use strict';

const { Model } = require('sequelize');
//가나다라

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) {  
    //  Match.hasMany(models.User, { foreignKey: "match-id" });   
      Match.hasMany(models.User);  
    }
  };  
  Match.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING, 
    gametype: DataTypes.INTEGER, 
    matchtype: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};    