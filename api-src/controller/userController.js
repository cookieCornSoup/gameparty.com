// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
/* author : shlifedev */ 

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/passwordHelper'); 
const UserService = require('../services/userService');


class UserController{
    async signIn (req, res, next){
        let email = req.body.email;
        let pw = req.body.password; 
        if(StringUtil.validateEmail(email)){
            UserService.create(email,pw);
        }else{
            res.statusCode = 400;
        }
       
        
    }
    async signUp (req, res, next){ 
        if(req.body.email && req.body.password){
            let encryptResult = PasswordHelper.encrypt(req.body.password);
            try{
                await UserService.create(req.body.email, encryptResult);
            }
            catch(err){

            } 
        }
  
    }
    async signOut (req, res, next){ 
    }
}

module.exports = new UserController()