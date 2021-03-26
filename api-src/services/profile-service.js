// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
class ProfileService {

    // 기존 프로필 찾기
    async findProfileByUserId(id) {
        try {
            const profile = models.Profile.findOne({ where: { 'userId': id } }); 
            return profile 
        }
        catch (err) {
            throw new ServiceError(400, Status.DB_ERROR, err.message);
        }
    }

    // REF
    async update(userid, nickname, age, sex, introduce) {
        try { 
        const result = await this.findProfileByUserId(userid);
        if (result) { 
                const updatedProfile = await models.Profile.update({
                    nickname: nickname,
                    age: age,
                    sex: sex,
                    introduce: introduce
                }, {
                    where: {
                        userId: userid
                    }
                });
                return updatedProfile; 
        } 
        else {
            throw new ServiceError(404, Status.PROFILE_NOT_FOUND, "프로필 정보를 찾지 못했습니다.");
        }
        } catch (err) {
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err.message); 
        } 
    }
 
    // 신규 유저 생성
    async create(userid, nickname, age, sex, introduce, discord_nick, discord_channel) {
        try { 
        const result = await this.findProfileByUserId(userid);
        //에러 발생시 에러리턴
        if (result) {
            throw new ServiceError(409, Status.PROFILE_ALREADY_EXIST, "이미 유저 프로필이 있습니다.");
        }else
        { 
                const create = await models.Profile.create({
                    nickname: nickname,
                    age: age,
                    sex: sex,
                    introduce: introduce,
                    userId: userid,
                    discord_nick : discord_nick,
                    discord_channel : discord_channel
                });
                return create; 
        } 
        } catch (err) {
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err.message); 
        } 
    }
}

module.exports = new ProfileService()