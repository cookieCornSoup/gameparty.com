const jwt = require('jsonwebtoken'); 
const { Status, Message } = require('../global/message');
const LikeService = require('../services/like-service');

class LikeController {
    async likeUser(req, res){  
        try{
            const payload = req.payload;
            const result = await LikeService.like(payload.id, req.body.targetId, req.body.reason);
            if(result){
                res.status(200).json(new Message(Status.SUCCESS, "유저 칭찬 등록됨", []));
            } 
        }catch(err){
            res.status(err.httpStatus).json(new Message(err.status, err.message, err.data))
        }
    }
}
module.exports = new LikeController();