// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

'use strict'
const { Message, Status } = require('../global/message');
const ServiceError = require('../exceptions/service');
const models = require('../models');
const { validateEmail } = require('../utils/validate/stringFormat');
const { sequelize } = require('../models');
class UserService {
    async findUserByEmail(email) {
        try {
            const user = await models.User.findOne({
                where: {
                    'email': email
                }
            });
            return user;
        }
        catch (err) { 
            throw new ServiceError(400, Status.DB_ERROR, err.message);
        }
    }
    async findUserById(id) {
        try {
            const user = await models.User.findOne({
                where: {
                    'id': id
                }
            });
            return user;
        }
        catch (err) {
            throw new ServiceError(400, Status.DB_ERROR, err.message);
        }
    }
    // 신규 유저 생성
    async create(email, hashPassword, salt) { 
        try{     
            const user = await this.findUserByEmail(email);
            if (!validateEmail(email)) {
                throw new ServiceError(400, Status.USERS_WRONG_EMAIL_FORMAT, "잘못된 이메일 형식입니다.");
            }
            if (user) {
                throw new ServiceError(409, Status.USERS_WRONG_PASSWORD400, "해당 이메일로 가입된 유저가 이미 있습니다.", {email : email});
            }
            else {
                const createResult = await models.User.create({
                    'email': email,
                    'password': hashPassword,
                    'salt': salt
                });
                return {
                    'id': createResult.id,
                    'email': email
                };
            }
        }
        catch (err) {  
            throw new ServiceError(err.httpStatus || 400, err.status || 1, 'users database error');
        }    
    }
}

module.exports = new UserService()