
const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
const userService = require('./user-service');

const UserService = require('./user-service');
class MatchService {

    async findMatchList() {

    }

    async findMatchById(matchId) {
        try {
            const matchData = models.Match.findOne({where:{id:matchId}});
            if(matchData){
                return matchData;
            }else{
                return null;
            }   
        }
        catch (err) {
                return null;
        }
    }

    async getUserMatch(userId) {

        const user = await UserService.findUserById(userId);
        if (user) {
            const match = await this.findMatchById(user.match_id);
            return match;
        }
        else {
            return null;
        }
    }
 

    async createAndJoinMatch(userId, title, description, gametype, matchtype) {
        const user = await userService.findUserById(userId);
        if (user) {
            const match = await this.getUserMatch(userId);
            if (match) {
                throw new ServiceError(Status.DB_ERROR, "매치 생성실패 - 이미 유저가 방에 입장한 상태입니다.", []);
            }
            else {
                //매치생성
                const newMatch = await models.Match.create({
                    title: title,
                    description: description,
                    gametype: gametype,
                    matchtype: matchtype
                });
                //생성후 유저 정보 갱신
                const updateUser = await models.User.update({
                    match_id: newMatch.id
                }, {where:{
                    id : userId,  
                    match_id : null
                }});
                if(updateUser){
                    console.log("유저 매치입장 성공 " +{
                        userId : userId,
                        matchId : newMatch.id
                    });
                    return {
                        userId: userId,
                        matchId: newMatch.id
                    }
                }
                else{
                    console.log("유저 매치 입장 실패!");
                    throw new ServiceError(Status.DB_ERROR, "매치 생성실패 - 업데이트할 유저를 찾지 못함.", []);
                }
               
            }
        }
        else{
            throw new ServiceError(Status.DB_ERROR, "유저id를 찾지 못했습니다.", {userId : userId})
        }
    }

    //유저를 방에 입장시킴
    async joinMatch(userId, matchId){
        const user = await userService.findUserById(userId);
        if(user){
            if(user.match_id === null){
                console.log("유저를 매치에 입장시킵니다.");
                const match = await this.findMatchById(matchId);
                //이미 매치가 있는경우
                if (match) {
                    const updateUser = await models.User.update(
                        { match_id: matchId },
                        { where: { id: userId, match_id: null } });
                    if (updateUser) {
                        
                    }
                    else {

                    }
                }
                //매치가 없는경우
                else{
                    throw new ServiceError(Status.MATCH_ID_NOT_FUND, "존재하지 않는 매치 id입니다.", {matchId : matchId});
                } 
            }
            else{
                console.log("이미 유저가 방에 입장중입니다.");
                throw new ServiceError(Status.MATCH_ALREADY_JOINED, "유저가 이미 방에 입장중입니다.");
            }
        }else{
            console.log ("유저 id를 찾지 못했습니다.");
            throw new ServiceError(Status.DB_ERROR, "유저id를 찾지 못했습니다.", userId);
        }
    }


}

module.exports = new MatchService();