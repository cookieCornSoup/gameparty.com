const jwt = require('jsonwebtoken');
const { Status, Message } = require('../global/message');
const ProfileService = require('../services/profile-service');
class ProfileController {
    async getProfile(req, res) {
        const token = jwt.decode(req.headers['x-access-token']);
        try { 
            const result = await ProfileService.findProfileByUserId(req.params.id);
            res.status(200).json(new Message(0, 'Profile GET Result', result));
        }
        catch (err) {
            res.status(400).json(new Message(err.status, err.message, []))
        }
    }


    async updateProfile(req, res) {

        const token = jwt.decode(req.headers['x-access-token']);
        const userId = token.id; 
        try {
            const result = await ProfileService.create(userId, req.body.nickname, req.body.age, req.body.sex, req.body.introduce, req.body.discord_id, req.body.discord_channel);
            res.status(201).json(new Message(0, 'Profile Updated!', result));
        }
        catch (err) {
            res.status(400).json(new Message(err.status, err.message, []))
        }
    }

    async createProfile(req, res) {
        const token = jwt.decode(req.headers['x-access-token']);
        const userId = token.id;
        console.log(req.file);
        try{
            const result = await ProfileService.create(userId, req.body.nickname, req.body.age, req.body.sex, req.body.introduce); 
            if (result) {
                res.status(200).json(new Message(0, 'profile create succesfully', result));
            } else {
                res.status(400).json(new Message(Status.UNKNOWN, 'profile create error', result))
            }
        }
        catch(err){
            res.status(400).json(new Message(err.status, err.message, []))
        }
       
    }
}

module.exports = new ProfileController();