'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      
      // liker : 좋아요 누른사람, target : 대상
      Like.belongsTo(models.User, {
        foreignKey: {name: "likerId", allowNull: false}
      });
      
      Like.belongsTo(models.User, {
        foreignKey: {name: "targetId", allowNull: false}
      });
    }
  };
  Like.init({
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};