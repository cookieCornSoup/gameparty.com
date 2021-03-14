// 'use strict';

// const { Model } = require('sequelize');
 
// // 1. 칭찬을 한 사람   
// // 2. 칭찬을 한 이유

// // 3. 칭찬을 받은 사람    
// module.exports = (sequelize, DataTypes) => {
//   class User_Recommand extends Model {
//     static associate(models) {
//       User_Recommand.belongsTo(models.User, {foreignKey:{name:"sourceUserId", }})
//       User_Recommand.belongsTo(models.User, {foreignKey:{name:"targetUserId", }})
//     } 
//   };
//   User_Recommand.init({
//     targetId: DataTypes.STRING(32),
//     password: DataTypes.STRING(128),
//     salt: DataTypes.STRING(32)
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User_Recommand;
// };