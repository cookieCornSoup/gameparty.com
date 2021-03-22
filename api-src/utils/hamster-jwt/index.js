// require jwt librayr
// modify config : hamster-jwt/config.json

const jwt = require('jsonwebtoken'); 
const fs =require('fs');
const path = require('path');
class JWTHelper {
    /*
    
    "ACCESS_TOKEN_EXPIRE" : "30d",
    "REFRESH_TOKEN_EXPIRE" : "30d",
    "ISSUER" : "shlifedev@gmail.com"
    */
    constructor() {

        //컨피그 읽기
        const _path = path.join(__dirname, "config.json");
        const config = JSON.parse(fs.readFileSync(_path)); 
        this.secret = config.JWT_PASSWORD;
        this.expiresIn = config.ACCESS_TOKEN_EXPIRE; 
        this.refreshExpiresIn = config.REFRESH_TOKEN_EXPIRE;
        this.iss = config.ISSUER;
    }
    
    //payload 정보와 함께 JWT토큰을 발급
    signIn(payload) {
        const token = jwt.sign(payload,
            this.secret,
            {
                expiresIn: this.expiresIn, //만료시간
                issuer: this.iss
            });
    
        return {
            access_token : token,
            refresh_token : this.createRefreshToken()
        };
    }
    
    createRefreshToken(){
        return jwt.sign({token_type : 'refresh_token'}, 
        this.secret, 
        {
            expiresIn : this.refreshExpiresIn,
            issuer: this.iss
        })
    }  


    //어세스 토큰을 리프레시 토큰을 사용하여 재발급합니다.
    accessTokenRefresh(access_token, refresh_token){
        const isAccessTokenValid = false; 
        const isRefreshTokenValid = false;
        const payload = null;
        
        // 기존 토큰 유효성 검증
        jwt.verify(access_token, this.secret, (err,decoded)=>{
            // 이곳에서 
                if(!err) {
                    isAccessTokenValid = true;
                    payload = decoded;
                } 
        });

        // 리프레시 토큰 유효성 검증
        jwt.verify(refresh_token, this.refresh_token, (err, decoded)=>{
            if(!err) 
                isRefreshTokenValid = true;  
        });
         

        //  기존 어에스 토큰
        if(isAccessTokenValid && isRefreshTokenValid){
            const payload = jwt.decode(access_token, this.secret);
            return jwt.sign()
        }
        else{
            return null;
        }
    }
}
 
module.exports = new JWTHelper();