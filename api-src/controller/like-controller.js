const jwt = require('jsonwebtoken'); 
const { Status, Message } = require('../global/message');
const LikeService = require('../services/like-service');

class LikeController {
    async likeUser(req, res){  
        try{
            const payload = jwt.decode(req.headers['x-access-token']);
            const result = await LikeService.like(payload.id, req.body.targetId, req.body.reason);
            if(result){
                res.status(200).json(new Message(Status.SUCCESS, "유저 칭찬 등록됨", []));
            } 
        }catch(err){
            res.status(400).json(new Message(err.status, err.message, []))
        }
    }
}