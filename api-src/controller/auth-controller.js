/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
 
const AuthService = require('../services/auth-service');
const jwt = require('jsonwebtoken');
const { Message, Status } = require('../global/message');
class AuthController { 
    /* 로그인 함수 */
    async signIn(req, res) {
        try { 
            const authResult = await AuthService.signIn(req.body.email, req.body.password); 
            const token = jwt.sign({
                id: authResult.id,
                email: authResult.email
            }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE, //임시 세션설정
                issuer: 'shlifedev'
            });
            return res.status(200).json(new Message(0, "로그인 성공!", {token : token})); 
        }
        catch (err) {
            return res.status(err.httpStatus).json(new Message(err.status, err.message, err.data));
        }
    }

    /* JWT 토큰 검증 */
    async verify(req, res) {
            res.send('not implements');
    }
}

module.exports = new AuthController()