// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
/* author : shlifedev */

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/password-helper');
const UserService = require('../services/user-service');
const { Message, Status } = require('../global/message');

const jwt = require('jsonwebtoken');
const passwordHelper = require('../utils/helper/password-helper'); 
class UserController { 
    async signUp(req, res, next) {      
        try{
            const email = req.body.email;
            const password = req.body.password;
            const encryptResult = passwordHelper.encrypt(password);
            const createdUser = await UserService.create(email, encryptResult.dbHashPassword, encryptResult.dbSalt); 

            // 토큰생성
            const token = jwt.sign({
                id: createdUser.id,
                email: createdUser.email
            }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE, //임시 세션설정
                issuer: 'shlifedev'
            });


            const result = {
                createdUser,
                token 
            }

            return res.status(200).json(new Message(0, 'user created!' , result));
        }catch(err){
            return res.status(err.httpStatus || 400).json(new Message(err.status || 1, err.message || 'unknown signup error', err.data));
        } 
    }


    async signOut(req, res, next) {
    }
}

module.exports = new UserController()