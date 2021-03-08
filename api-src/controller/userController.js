// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
/* author : shlifedev */

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/passwordHelper');
const UserService = require('../services/userService');

class UserController { 
    async signUp(req, res, next) { 
        console.log("[REQ]" + req.body.email);
        if (StringUtil.validateEmail(req.body.email)) {
            if (req.body.email && req.body.password) {
                let encryptResult = PasswordHelper.encrypt(req.body.password);
                try {
                    let result = await UserService.create(req.body.email, encryptResult.dbHashPassword, encryptResult.dbSalt);
                    if (result) {
                        res.json(result);
                    } else {
                        res.statusCode = 400;
                        res.send("email already registed")
                    }
                }
                catch (err) {
                    console.log("[ERR] " + err);
                    res.statusCode = 400;
                    res.send("400");
                }
            }
            else {
                res.statusCode = 400;
                res.send("wrong request body");
            }
        }
        else {
            res.statusCode = 400;
            res.send("wrong email");
        } 
    }


    async signOut(req, res, next) {
    }
}

module.exports = new UserController()