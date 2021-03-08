/* author : shlifedev */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com 
const jwt = require('jsonwebtoken');
class GameAccountController{
    async addGame(req, res){
        const token = jwt.decode(req.headers['x-access-token']);
        
    } 
}

module.exports = new GameAccountController()