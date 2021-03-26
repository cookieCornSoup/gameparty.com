// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const ServiceError = require('../exceptions/service');
const { Message, Status } = require('../global/message');
const models = require('../models');
class LikeService {


    async findUserLike(likerId, targetId) {
        try {
            const like = await models.Like.findOne({
                where: {
                    likerId: likerId,
                    targetId: targetId
                }
            });   
            return like;
        } catch (err) {
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err);
        }
    }


    //대상 유저가 받은 모든 좋아요
    async findAllLike(userId) {
        try {
            const likes = await models.Like.findAll({
where: {
                    likerId: likerId,
                    targetId: targetId
                }
            });
        } catch (err) {
            throw new ServiceError(400, Status.DB_ERROR, err);
        }
    }


    //칭찬 및 사유
    async like(likerId, targetId, reason) {
        try{
            //이유를 적지 않았을경우
            if(!reason){
                throw new ServiceError(400, Status.LIKE_REQUIRE_REASON, "이유를 등록해야 합니다.");
            }
            const like = await this.findUserLike(likerId, targetId); 
            if(like){
                throw new ServiceError(409, Status.LIKE_ALREADY_SEND, "이미 칭찬한 유저입니다.", {likerId:likerId, targetId:targetId});
            }else{
                const createLike = await models.Like.create({
                    reason : reason,
                    likerId : likerId,
                    targetId : targetId
                }); 
                return createLike;
            }
         
        }
        catch(err){
            throw new ServiceError(err.httpStatus || 400, err.status || Status.DB_ERROR, err);
        }
    }

     

} 
module.exports = new LikeService()