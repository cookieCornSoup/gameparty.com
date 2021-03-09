/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com 
const jwt = require('jsonwebtoken');
const gameType = require('../global/game-type');
const SuccessMessage = require('../global/success-message');
const GameAccountService = require('../services/gameaccountService');
class GameAccountController{
    async addGame(req, res){
        const token = jwt.decode(req.headers['x-access-token']);
        const result = await GameAccountService.create(token.id, req.body.gametype, req.body.nickname);

        if(typeof result === SuccessMessage){
           return res.status(200).json(result.obj);
        }else{
           return res.status(400).json(result);
        }
    } 
}

module.exports = new GameAccountController()