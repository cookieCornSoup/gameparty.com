'use strict'
const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
const passwordHelper = require('../utils/helper/password-helper');
const { validateEmail } = require('../utils/validate/stringFormat');
const userService = require('./user-service');
class AuthService {
    async signIn(email, pw) {  
        try {
            if (!validateEmail(email))
            {
                throw new ServiceError(400, Status.WRONG_EMAIL_FORMAT, "잘못된 이메일 형식입니다"); 
            }
            if (pw === null || pw.length === 0)
                throw new ServiceError(400, Status.REQUIRE_PASSWORD, "비밀번호를 입력하지 않았습니다.");

            const user = await userService.findUserByEmail(email);
            if (user === null) {
                throw new ServiceError(404, Status.USER_NOT_FOUND, "유저 정보를 찾지 못했습니다."); 
            } 

            const result = passwordHelper.validate(pw, user.password, user.salt);  
            if (result === true) {  
                return {
                    id: user.id,
                    email: user.email
                };
            } else {
                throw new ServiceError(400, Status.WRONG_PASSWORD, "잘못된 비밀번호 입니다.");
            }
        }
        catch (err) { 
            throw new ServiceError(400 , err.status || 1, err.message);
        }
    }
}

module.exports = new AuthService();