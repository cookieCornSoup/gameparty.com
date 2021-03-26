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
            throw new ServiceError(Status.DB_ERROR, err.message);
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
            throw new ServiceError(Status.DB_ERROR, err.message);
        }
    }
    // 신규 유저 생성
    async create(email, hashPassword, salt) { 
        try{     
            const user = await this.findUserByEmail(email);
            if (!validateEmail(email)) {
                throw new ServiceError(Status.DB_ERROR, "잘못된 이메일 형식입니다.");
            }
            if (user) {
                throw new ServiceError(Status.DB_ERROR, "해당 이메일로 가입된 유저가 이미 있습니다.");
            }
            else {
                const createResult = await models.User.create({
                    'email': email,
                    'password': hashPassword,
                    'salt': salt
                });
                return {
                    'email': email
                };
            }
        }
        catch (err) { 
             console.log(err);
        }    
            
    }
}

module.exports = new UserService()