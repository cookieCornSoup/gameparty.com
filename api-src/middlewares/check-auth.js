/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const jwt = require('jsonwebtoken');
const { Message, Status } = require('../global/message');
async function checkAuth(req, res, next) {

    //헤더에서 토큰 가져오기
    const token = req.headers['x-access-token'];
    //토큰이 없는경우 로그인 상태 X
    if (!token) {
        return res.status(400).json(new Message(Status.TokenError, "Cannot found token", "not logged in!"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error(err); 
            return res.status(401).json(new Message(Status.TokenError, "Invalid Token", "토큰 만료 혹은 토큰이 조작됨")); 
        } else {
            console.log("user auth successfully => " , decoded)
            next();
        }
    });
}


module.exports = checkAuth;