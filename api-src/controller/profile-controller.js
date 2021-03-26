const jwt = require('jsonwebtoken');
const { Status, Message } = require('../global/message');
const ProfileService = require('../services/profile-service');
class ProfileController {
    async getProfile(req, res) {
        const payload = req.payload;
        try {
            const result = await ProfileService.findProfileByUserId(req.params.id);
            res.status(200).json(new Message(0, 'Profile GET Result', result));
        }
        catch (err) {
            res.status(err.httpStatus).json(new Message(err.status, err.message, err.data))
        }
    }


    async updateProfile(req, res) {

        const payload = req.payload;
        const userId = payload.id; 
        try {
            const result = await ProfileService.create(userId, req.body.nickname, req.body.age, req.body.sex, req.body.introduce, req.body.discord_nick, req.body.discord_channel);
            res.status(200).json(new Message(0, 'Profile Updated!', result));
        }
        catch (err) {
            res.status(err.httpStatus).json(new Message(err.status, err.message, err.data))
        }
    }

    async createProfile(req, res) {   
        try{
            const result = await ProfileService.create(req.payload.id, req.body.nickname, req.body.age, req.body.sex, req.body.introduce,req.body.discord_nick, req.body.discord_channel); 
            res.status(200).json(new Message(0, 'profile create succesfully', result));
        }
        catch(err){
            console.log(err);
            res.status(err.httpStatus).json(new Message(err.status, err.message, err.data))
        }
       
    }
}

module.exports = new ProfileController();