/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const jwt = require('jsonwebtoken');
const { Message, Status } = require('../global/message');
async function checkAuth(req, res, next) {
    //헤더에서 토큰 가져오기
 
    let token = req.headers['authorization'];  
    //토큰이 없는경우 로그인 상태 X
    if (!token) {
        return res.status(400).json(new Message(Status.AUTH_TOKEN_NOT_FOUND, "Cannot found token", "not logged in!"));
    }
    const bearerSpliter = token.split(" "); 
    if(bearerSpliter.length == 2){
        token = bearerSpliter[1];
    }   
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error(err); 
            return res.status(401).json(new Message(Status.AUTH_TOKEN_ERROR, "Invalid Token", "토큰 만료 혹은 토큰이 조작됨")); 
        } else {
            console.log("user auth successfully => " + decoded) 
            req.payload = decoded;
            next();
        }
    });

  
}


module.exports = checkAuth;