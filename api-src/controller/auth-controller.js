/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const StringUtil = require('../utils/validate/stringFormat');
const PasswordHelper = require('../utils/helper/passwordHelper');
const UserService = require('../services/user-service');
const jwt = require('jsonwebtoken');
const { Message, Status } = require('../global/message');
class AuthController { 
    /* 로그인 함수 */
    async signIn(req, res) {
        try {
            const user = await UserService.findUserByEmail(req.body.email);
            //유저가 이미 있는경우 로그인시도
            if (user) {
                const email = req.body.email;
                const pw = req.body.password;
                //이메일 검증
                if (StringUtil.validateEmail(email)) {
                    const result = PasswordHelper.validate(pw, user.password, user.salt)
                    //로그인 성공
                    if (result === true) {
                        const token = jwt.sign({
                            id: user.id,
                            email: user.email
                        }, process.env.JWT_SECRET, {
                            expiresIn: process.env.JWT_EXPIRE, //임시 세션설정
                            issuer: 'shlifedev'
                        });
                        return res.json(new Message(Status.SUCCESS, "인증 성공", token));
                    } else {
                        res.statusCode = 400;
                        return res.json(new Message(Status.WRONG_REQUEST_DATAR, "Wrong Password", "비밀번호가 틀렸습니다.", []));
                    }
                }
                //이메일 검증실패
                else {
                    res.statusCode = 400;
                    return res.json(new Message(Status.WRONG_REQUEST_DATA, "Wrong Email", "잘못된 이메일 형식입니다", []));
                }
            }
            else {
                res.statusCode = 400;
                return res.json(new Message("Not Found Email", "해당 이메일을 찾을 수 없습니다", []));
            }
        }
        catch (err) {
            console.log(err);
            res.json(new Message(err.status, err.message, []));
        }

    }

    /* JWT 토큰 검증 */
    async verify(req, res) {

        try {
            //헤더에서 토큰 가져오기
            const token = req.headers['x-access-token'];
            //토큰이 없는경우 로그인 상태 X
            if (!token) {
                return res.status(403).json(new Message(Status.TokenError, "Cannot found token", []));
            } 
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    console.error(err);
                    res.json(new Message(Status.TokenError, "Token verify error", err))
                } else {
                    console.log("decoded : ", decoded);
                    res.json(new Message(Status.SUCCESS, "verified!", []));
                }
            });
        }
         catch (err) {
            res.json(new Message(err.status, err.message, []));
        }

    }
}

module.exports = new AuthController()