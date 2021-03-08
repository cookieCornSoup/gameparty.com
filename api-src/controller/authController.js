/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/passwordHelper');
const UserService = require('../services/userService');
const ErrorMessage = require('../global/error-message');
const jwt = require('jsonwebtoken');
class AuthController{

    /* 로그인 함수 */
    async signIn(req, res) { 
        let user = await UserService.fineUserByEmail(req.body.email);
        if (user) {
            let email = req.body.email;
            let pw = req.body.password;
            //이메일 검증
            if (StringUtil.validateEmail(email)) {
                let result = PasswordHelper.validate(pw, user.password, user.salt)
                //로그인 성공
                if(result === true){  
                    const token = jwt.sign({
                        id: user.id,
                        email : user.email
                    }, process.env.JWT_SECRET, {
                        expiresIn: '1m',
                        issuer : 'shlifedev'
                    });
                    res.json(token);
                }else{ 
                    res.statusCode = 400; 
                    res.json(new ErrorMessage("Wrong Password", "비밀번호가 틀렸습니다.")); 
                }
            }
            //이메일 검증실패
            else {
                res.statusCode = 400;
                res.json(new ErrorMessage("Wrong Email", "잘못된 이메일 형식입니다")); 
            }
        }
        else {
            res.statusCode = 400;
            res.json(new ErrorMessage("Not Found Email", "해당 이메일을 찾을 수 없습니다")); 
        } 
    }

    /* JWT 토큰 검증 */
    async verify(req, res){
        
        //헤더에서 토큰 가져오기
        const token = req.headers['x-access-token']; 
        //토큰이 없는경우 로그인 상태 X
        if(!token) {
            return res.status(403).json(new ErrorMessage("Cannot found token", "not logged in!")); 
        }  
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                console.error(err);
                res.send(err);
            }else{
                console.log("decoded : " , decoded);
                res.send ("ok");
            }
        }); 
    }
}

module.exports = new AuthController()