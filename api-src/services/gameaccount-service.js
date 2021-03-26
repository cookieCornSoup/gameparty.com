'use strict' 
const ServiceError = require('../exceptions/service');
const { Status, Message } = require('../global/message'); 
const models = require('../models');


class GameAccountService{

    // 유저가 하는 게임을 모두 리턴
    async findAllGameAccountsWithUserId(userId){
        try{
            const result = await models.GameAccount.findAll({where:{
                'user_id' : userId
            }});
            return result;
        }
        catch(err){
           throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err.message); 
        }  
    }
    // gameType을 소유하고 있다면 리턴
    async findUserGame(userId, gameType){ 
        try{
            const result = await models.GameAccount.findOne({where:{
                'user_id' : userId,
                gameType : gameType
            }}); 
            return result;
        }
        catch(err){
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err.message); 
        } 
    }

    async isNicknameDuplicate(gameType, nickname){
        try{
            const result = await models.GameAccount.findOne({where:{
                gameType : gameType,
                nickname : nickname
            }});
            if(result){
                return true;
            }else{
                return false;
            }
        }
        catch(err){
            throw new ServiceError(err.httpStatus || 400, err.status || 1, err.message); 
        }
    }
    // 해당 유저가 하는 게임의 정보를 등록
    async create(userId, gametype, nickname){
        const game = await this.findUserGame(userId, gametype); 
        if(game){  
            throw new ServiceError(409, Status.GA_ALREADY_EXIST_GAME, "이미 요청한 게임을 등록한 유저입니다.", {userId:userId});
        }else{
            try{
                const isNickDuplicate = await this.isNicknameDuplicate(gametype, nickname);
                if(isNickDuplicate === true){
                    throw new ServiceError(409, Status.GA_ALREADY_EXIST_NICKNAME, "다른 플레이어가 이미 사용중인 게임 닉네임입니다.", {nickname:nickname});
                }else if(isNickDuplicate === false){
                    
                const create = await models.GameAccount.create({
                    gametype : gametype,
                    nickname : nickname,
                    'user_id' : userId
                })
                return create;
                }else{
                    throw new ServiceError(400, Status.DB_ERROR, 'error');
                } 
            }
            catch(err)
            {
                throw new ServiceError(400, Status.DB_ERROR, err.message); 
            } 
        }
    }

    // 유저의 uid를 인증하고 db의 verified값을 true로 설정
    async setVerify(userId, uid){
        try{
            models.GameAccount.update({uid : uid, verified : 1}, {where : {'user_id' : userId}})
        }
        catch(err){
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err.message); 
        } 
    }
 
}

module.exports = new GameAccountService();