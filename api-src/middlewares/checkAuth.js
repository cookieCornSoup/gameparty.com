/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const jwt = require('jsonwebtoken');
async function checkAuth(req, res, next) {

    //헤더에서 토큰 가져오기
    const token = req.headers['x-access-token'];
    //토큰이 없는경우 로그인 상태 X
    if (!token) {
        return res.status(403).json(new ErrorMessage("Cannot found token", "not logged in!"));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            console.log("user auth successfully => " , decoded)
            next();
        }
    });
}


module.exports = checkAuth;