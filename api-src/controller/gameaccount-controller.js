/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com 
const jwt = require('jsonwebtoken');
const gameType = require('../global/game-type'); 
const { Status, Message } = require('../global/message');
const GameAccountService = require('../services/gameaccount-service');
class GameAccountController{
    async addGame(req, res){
        const payload = req.payload;
        try{
            const result = await GameAccountService.create(payload.id, req.body.gametype, req.body.nickname);
            if(result){
                res.status(200).json(new Message(Status.SUCCESS, "User Game Registed!", {
                    gametype : req.body.gametype,
                    nickname : req.body.nickname
                }));
            } 
        }catch(err){
            res.status(400).json(new Message(err.status, err.message, []))
        }
 
    }  
}

module.exports = new GameAccountController()