// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com
 
const ErrorMessage = require('../global/error-message');
const models = require('../models');
class ProfileService {

    // 기존 프로필 찾기
    async findProfileByUserId(id) {
        try{
            const profile = models.Profile.findOne({where:{'userId': id}});
            return profile;
        }
        catch(err){
            return new ErrorMessage("DB Error", "데이터 베이스 에러");
        }  
    }

   
    // 신규 유저 생성
    async create (userid, nickname, age, sex, introduce){ 
       
        const result = await this.findProfileByUserId(userid);
        if(typeof result === ErrorMessage) return result;

        if(result){
            return new ErrorMessage("Profile Already Exist", "프로필이 이미 존재합니다.");
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