const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
const passwordHelper = require('../utils/helper/password-helper');
const { validateEmail } = require('../utils/validate/stringFormat');
const userService = require('./user-service');
class AuthService{
    async signIn(email, pw)
    {
        
        if(!validateEmail(email)) 
            throw new ServiceError(Status.WRONG_REQUEST_DATA, "잘못된 이메일 형식입니다");
        if(pw === null || pw.length === 0) 
            throw new ServiceError(Status.WRONG_REQUEST_DATA, "비밀번호를 입력하지 않았습니다.");
        
        const user = await userService.findUserByEmail(email);
        if(user === null) 
            throw new ServiceError(Status.WRONG_REQUEST_DATA, "유저 정보를 찾지 못했습니다.");
        
        const result = passwordHelper.validate(pw, user.password, user.salt);
        if(result){ 
            return {
                id : user.id,
                email : user.email
            };
        }else{
            throw new ServiceError(Status.WRONG_PASSWORD, "잘못된 비밀번호 입니다.");
        } 
    }
}

module.exports = new AuthService();