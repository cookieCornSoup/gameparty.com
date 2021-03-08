// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
 
const models = require('../models');
class UserService{

    
    async fineUserByEmail(email){
        let user = await models.User.findOne({
            where : {
                'email' : email
            }
        });
        return user;
    }
    // 신규 유저 생성
    async create (email, hashPassword, salt){ 
        user = await fineUserByEmail(email); 
        console.log("[LOG]"  + user);
        if(user){
            return null;
        }
        else{
            return await models.User.create({
                'email' : email,
                'password' : hashPassword,
                'salt' : salt
            });
        }
    }
}

module.exports = new UserService()