/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com 
const jwt = require('jsonwebtoken');
const gameType = require('../global/game-type'); 
const { Status, Message } = require('../global/message');
const GameAccountService = require('../services/gameaccountService');
class GameAccountController{
    async addGame(req, res){
        const token = jwt.decode(req.headers['x-access-token']);
        const result = await GameAccountService.create(token.id, req.body.gametype, req.body.nickname);

        if(result.status == Status.SUCCESS){
           return res.json(result);
        }else{ 
           return  res.json(result);
        }
    } 
}

module.exports = new GameAccountController()