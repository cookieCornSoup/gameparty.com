// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const models = require('../models');
class ProfileService {

    // 기존 프로필 찾기
    async findProfileByUserId(id) {
        const profile = models.Profile.findOne({where:{'userId': id}});
        return profile;
    }

   
    // 신규 유저 생성
    async create (userid, nickname, age, sex, introduce){ 
       
        const profile = await this.findProfileByUserId(userid);
        if(profile){
            return null;
        }else{
            const create = await models.Profile.create({
                nickname : nickname,
                age : age,
                sex : sex,
                introduce : introduce,
                userId : userid
            });

            return create;
        } 
    }
}

module.exports = new ProfileService()