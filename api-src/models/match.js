'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    static associate(models) { 
       Match.hasMany(models.Profile, { foreignKey: "match-id", sourceKey: "id" }); 
    }
  };
  Match.init({
    title: DataTypes.STRING(32),
    description: DataTypes.STRING(128),
    gametype: DataTypes.INTEGER,
    matchtype: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};