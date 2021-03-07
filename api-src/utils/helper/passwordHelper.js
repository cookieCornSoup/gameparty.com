
const crypto = require('crypto');
class PasswordHelper{
    
    // 비밀번호 암호화, salt return
    encrypt(password){
        //salt를 만든다
        let salt = Math.round((new Date().valueOf() * Math.random())) + ""; 
        //salt로 해시패스워드 생성
        let hashPassword = crypto.createHash("sha512").update(password + salt).digest("hex");
        return {
            dbHashPassword : hashPassword,
            dbSalt : salt
        };
    } 

    // password를 dbSalt로 암호화하여 해시가 동일한지 체크.
    validate(password, dbPassword, dbSalt){
        let hashPassword = crypto.createHash("sha512").update(password + dbSalt).digest("hex");
        let validResult = dbPassword == hashPassword;
        return validResult;
    }
    
}

module.exports = new PasswordHelper();