// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
/* author : shlifedev */

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/password-helper');
const UserService = require('../services/user-service');
const { Message, Status } = require('../global/message');

const jwt = require('jsonwebtoken');
class UserController { 
    async signUp(req, res, next) {     
        console.log(req.body);
        if (StringUtil.validateEmail(req.body.email)) {
            if (req.body.email && req.body.password) {
                const encryptResult = PasswordHelper.encrypt(req.body.password);
                try {
                    
                    const result = await UserService.create(req.body.email, encryptResult.dbHashPassword, encryptResult.dbSalt);
                    if (result) {
                        res.statusCode = 200;

                        const token = jwt.sign({
                            id: result.id,
                            email: result.email
                        }, process.env.JWT_SECRET, {
                            expiresIn: process.env.JWT_EXPIRE, //임시 세션설정
                            issuer: 'shlifedev'
                        });
                        
                        return res.json(new Message(Status.SUCCESS, "SignUp Succesfully!", {token : token})); 
                    } else { 
                        return res.json(new Message(Status.DB_ERROR, "email already registred", [])); 
                    }
                }
                catch (err) {
                    console.log("[ERR] " + err);
                    res.statusCode = 400;
                    return res.json(new Message(err.status, err.message,[])); 
                } 
            }
            else {
                res.statusCode = 400;
                return res.json(new Message(Status.WRONG_REQUEST_DATA, "Wrong Request Data", [])); 
            }
        }
        else {
            res.statusCode = 400;
            return res.json(new Message(Status.WRONG_REQUEST_DATA, "Wrong Email Format", [])); 
        } 
    }


    async signOut(req, res, next) {
    }
}

module.exports = new UserController()