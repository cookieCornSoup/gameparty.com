'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
        Profile.belongsTo(models.User, {foreignKey : "userId", targetKey : "id" }); 
    }
  };
  Profile.init({
    nickname: DataTypes.STRING,
    age: DataTypes.TINYINT,
    sex: DataTypes.TINYINT,
    introduce: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};