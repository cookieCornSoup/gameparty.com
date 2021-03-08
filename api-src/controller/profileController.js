const jwt = require('jsonwebtoken');
const ProfileService = require('../services/profileService');
const ErrorMessage = require('../global/error-message');
class ProfileController
{
    async getProfile(req, res){
        const token = jwt.decode(req.headers['x-access-token']); 
        const result = await ProfileService.findProfileByUserId(req.params.id);
        
        if(result){
            res.send(result);
        }else{
            res.status(400).json(new ErrorMessage('Profile Find Error', 'error'))
        }
    }    
    async createProfile(req, res){
        const token = jwt.decode(req.headers['x-access-token']);
        const userId = token.id;
        const result = await ProfileService.create(userId, req.body.nickname, req.body.age, req.body.sex, req.body.introduce);

        if(result){
            res.send(result);
        }else{
            res.status(400).json(new ErrorMessage('Profile Create Error', 'error'))
        }
    }    
}

module.exports = new ProfileController();