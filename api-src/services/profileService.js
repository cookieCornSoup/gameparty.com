// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const { Message, Status } = require('../global/message');
const models = require('../models');
class ProfileService {

    // 기존 프로필 찾기
    async findProfileByUserId(id) {
        try {
            const profile = models.Profile.findOne({ where: { 'userId': id } });

            if (profile) { //프로필이 있으면 프로필데이터 리턴
                return new Message(Status.SUCCESS, "success", profile);
            } else {
                return new Message(Status.DataNotFound, "data not found", []);
            }

        }
        catch (err) {
            return new Message(Status.DB_ERROR, "DB Error", err);
        }
    }


    async update(userid, nickname, age, sex, introduce) {
        const result = await this.findProfileByUserId(userid);
        if (result.status == Status.SUCCESS) {
            try { 
                const update = await models.Profile.update({
                    nickname: nickname,
                    age: age,
                    sex: sex,
                    introduce: introduce
                }, {
                    where: {
                        userId: userid
                    }
                });
                return new Message(Status.SUCCESS, "유저 정보 갱신", update);
            }
            catch(err){
                return new Message(Status.DB_ERROR, "유저 정보 갱신 예외발생", err);
            }
        } else {
            return new Message(Status.DB_ERROR, "유저 정보가 없습니다.", []);
        }
    }
    // 신규 유저 생성
    async create(userid, nickname, age, sex, introduce) {
        const result = await this.findProfileByUserId(userid);
        //에러 발생시 에러리턴
        if (result.status == Status.SUCCESS) return new Message(Status.DB_ERROR, "이미 유저 프로필이 있습니다.", []);

        if (result.status == Status.DataNotFound) {
            const create = await models.Profile.create({
                nickname: nickname,
                age: age,
                sex: sex,
                introduce: introduce,
                userId: userid
            });
            return new Message(Status.SUCCESS, "create successfully!", create);
        }
        else {
            return result;
        }
    }
}

module.exports = new ProfileService()