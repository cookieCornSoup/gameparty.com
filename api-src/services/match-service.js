
const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
const userService = require('./user-service');

const UserService = require('./user-service');
class MatchService {
 
    // 매치 리스트 받아오기
    async findMatchList() {
        try {
            //최근 생성된 데이터 기준으로 여섯개 가져오기
            const matchData = models.Match.findAll(
                {
                    order : [['id', 'DESC']],
                    limit: 6, 
                });
            return matchData;
        } catch (err) {   
            throw new ServiceError(Status.DB_ERROR, err.message);
        } 
    } 

   
    async findMatchById(matchId) {  
        try {
            const matchData = models.Match.findOne({ where: { id: matchId } });
            if (matchData) {
                return matchData;
            } else {
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


    // 유저 매치 퇴장
    async leaveMatch(userId){
        const user = await userService.findUserById(userId);
        if(user){
            if(user.match_id !== null){
                  const updatedUser = await models.User.update({match_id : null},{where:{id:userId}});
                  if(updatedUser){
                     return true; //유저 방 나가기 성공
                  }
                  else{
                    throw new ServiceError(Status.DB_ERROR, "유저 방 나가기 실패")
                  }
            }
        }else{
            throw new ServiceError(Status.DB_ERROR, "유저id를 찾지 못했습니다.")
        }
    }

    //  방 생성 및 입장
    async createAndJoinMatch(userId, title, description, gametype, matchtype) {
        const user = await userService.findUserById(userId);
        if (user) {
            const match = await this.getUserMatch(userId);
            if (match) {
                throw new ServiceError(Status.MATCH_ALREADY_JOINED, "매치 생성실패 - 이미 유저가 방에 입장한 상태입니다.");
            }
            else {
                //매치생성
                const newMatch = await models.Match.create({
                    title: title,
                    description: description,
                    gametype: gametype,
                    matchtype: matchtype
                }); 
 
                const joinResult = await this.joinMatch(userId,newMatch.id); 
                if(joinResult === true){
                    return {
                        userId : userId,
                        roomId : newMatch.id
                    }
                }
                else{
                   throw new SeriveError(Status.DB_ERROR, "매치 입장 실패");
                }
            }
        }
        else {
            throw new ServiceError(Status.DB_ERROR, "유저id를 찾지 못했습니다.")
        }
    }



 
    //유저를 방에 입장시킴
    async joinMatch(userId, matchId) {
        const user = await userService.findUserById(userId);
        if (user) {
            //입장중인 방이 없는경우
            if (user.match_id === null) {
                console.log("유저를 매치에 입장시킵니다.");
                const match = await this.findMatchById(matchId);

                //인원수 검증코드 작성해야함


                //이미 매치가 있는경우
                if (match) {
                    
                    user.match_id = matchId;
                    await user.save();  
                    console.log("update user :%j", user)
                    //유저 방에 입장시키기
                    if (user.match_id !== null) {
                        return true;
                    }
                    else {
                        throw new ServiceError(Status.DB_ERROR, "유저 방 입장 실패", []);
                    }
                }
                //매치가 없는경우
                else {
                    throw new ServiceError(Status.MATCH_ID_NOT_FUND, "존재하지 않는 매치 id입니다.", { matchId: matchId });
                }
            }
            else {
                console.log("이미 유저가 방에 입장중입니다.");
                throw new ServiceError(Status.MATCH_ALREADY_JOINED, "유저가 이미 방에 입장중입니다.");
            }
        } else {
            console.log("유저 id를 찾지 못했습니다.");
            throw new ServiceError(Status.DB_ERROR, "유저id를 찾지 못했습니다.");
        }
    }


}

module.exports = new MatchService();