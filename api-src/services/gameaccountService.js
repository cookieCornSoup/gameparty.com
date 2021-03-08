const ErrorMessage = require('../global/error-message');
const SuccessMessage = require('../global/success-message');
const models = require('../models');


class GameAccountService{

    // 유저가 하는 게임을 모두 리턴
    async findAllGameAccountsWithUserId(userId){
        const result = await models.GameAccount.findAll({where:{
            userId : userId
        }});

        return result;
    }
    // gameType을 소유하고 있다면 리턴
    async findUserGame(userId, gameType){
        const result = await models.GameAccount.findAll({where:{
            userId : userId,
            gameType : gameType
        }});

        return result;
    }
    // 해당 유저가 하는 게임의 정보를 등록
    async create(userId, gametype, nickname){
        const game = await this.findUserGame(userId, gameType);
        if(game){
            return new ErrorMessage("Error", "Use");
        }else{
            try{
                const create = await models.GameAccount.create({
                    gametype : gametype,
                    nickname : nickname
                })
                return new SuccessMessage("Success!", create);
            }
            catch(err)
            {
                return new ErrorMessage("GameAccount Create Error.", err);
            } 
        }
    }

    // 유저의 uid를 인증하고 db의 verified값을 true로 설정
    async setVerify(userId, uid){
        models.GameAccount.update({uid : uid, verified : 1}, {where : {userId : userId}})
    }
 
}

module.exports = new GameAccountService();