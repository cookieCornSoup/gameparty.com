// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
 
const models = require('../models');
class UserService{ 
    async findUserByEmail(email){
        const user = await models.User.findOne({
            where : {
                'email' : email
            }
        }); 
        return user;
    }
    // 신규 유저 생성
    async create (email, hashPassword, salt){ 
       
        const user = await this.findUserByEmail(email); 
        console.log("[LOG]"  + user);
        if(user){
            return null;
        }
        else{
            try{
                const createResult = await models.User.create({
                    'email' : email,
                    'password' : hashPassword,
                    'salt' : salt
                });
                
            }catch(err){
                return null;
            } 
        }
    }
}

module.exports = new UserService()