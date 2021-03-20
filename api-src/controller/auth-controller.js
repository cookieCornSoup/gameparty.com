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
            return res.status(400).json(new Message(err.status, err.message, []));
        }
    }

    /* JWT 토큰 검증 */
    async verify(req, res) {

        try {
            //헤더에서 토큰 가져오기
            const token = req.headers['x-access-token'];
            //토큰이 없는경우 로그인 상태 X
            if (!token) {
                return res.status(400).json(new Message(Status.TOKEN_ERROR, "Cannot found token", []));
            } 
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    console.error(err);
                    res.status(401).json(new Message(Status.TOKEN_ERROR, "Token verify error", err))
                } else {
                    console.log("decoded : ", decoded);
                    res.status(200).json(new Message(Status.SUCCESS, "verified!", []));
                }
            });
        }
         catch (err) {
            res.json(new Message(err.status, err.message, []));
        }

    }
}

module.exports = new AuthController()