const jwt = require('jsonwebtoken');
const matchService = require('../services/match-service');
const { Status, Message } = require('../global/message');
class MatchController {
    async createMatch(req, res) {
        const payload = jwt.decode(req.headers['x-access-token']);
        const userId = payload.id; 
        const title = req.body.title;
        const desc = req.body.description;
        const gametype = req.body.gametype;
        const matchtype = req.body.matchtype;

        try {
            const createResult = await matchService.createAndJoinMatch(userId, title, desc, gametype, matchtype);
            return res.status(200).json(new Message(0, '방 생성후 입장에 성공했습니다.', createResult));
        } catch (err) {
            return res.status(400).json(new Message(err.status, err.message, []));
        }
    }

    // 방 번호
    // 방 제목
    // 방장 닉네임
    // 방 설명 
    // 생성 시간
    async getMatchList(req, res) {

    }

    async deleteMatch(req, res) {

    }

    async joinMatch(req, res) {

    }

    async leaveMatch(req, res) {

    } 
}

module.exports = new MatchController();