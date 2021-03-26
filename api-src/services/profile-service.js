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

            if (profile) { //프로필이 있으면 프로필데이터 리턴
                return profile;
            } 
            else {
                throw new ServiceError(Status.DATA_NOT_FOUND, "프로필을 찾지 못했습니다.");
            }

        }
        catch (err) {
            throw new ServiceError(Status.DB_ERROR, err.message);
        }
    }

    // 
    async update(userid, nickname, age, sex, introduce) {
        const result = await this.findProfileByUserId(userid);
        if (result) {
            try {
                const result = await models.Profile.update({
                    nickname: nickname,
                    age: age,
                    sex: sex,
                    introduce: introduce
                }, {
                    where: {
                        userId: userid
                    }
                });
                return result;
            }
            catch (err) {
                throw new ServiceError(Status.DB_ERROR, err.message);
            }
        } else {
            throw new ServiceError(Status.DB_ERROR, "유저 정보를 찾지 못했습니다.");
        }
    }
    // 신규 유저 생성
    async create(userid, nickname, age, sex, introduce, discord_nick, discord_channel) {
        const result = await this.findProfileByUserId(userid);
        //에러 발생시 에러리턴
        if (result) {
            throw new ServiceError(Status.DB_ERROR, "이미 유저 프로필이 있습니다.");
        }else
        {
            try {
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
            catch (err) {
                throw new ServiceError(Status.DB_ERROR, err.message);
            }
        }
    }
}

module.exports = new ProfileService()