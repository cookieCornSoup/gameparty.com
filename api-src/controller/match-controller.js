const jwt = require('jsonwebtoken');
const matchService = require('../services/match-service');
const { Status, Message } = require('../global/message');
const { joinMatch } = require('../services/match-service');
class MatchController {
    async createMatch(req, res) {
        const payload = jwt.decode(req.headers['x-access-token']);
        const userId = payload.id;
        const title = req.body.title;
        const desc = req.body.description;
        const gametype = req.body.gametype;
        const matchtype = req.body.matchtype;
        if (req.body.description && req.body.gametype && req.body.matchtype) {
            try {
                const createResult = await matchService.createAndJoinMatch(userId, title, desc, gametype, matchtype);
                return res.status(200).json(new Message(0, '방 생성후 입장에 성공했습니다.', createResult));
            } catch (err) {
                return res.status(400).json(new Message(err.status, err.message, []));
            }
        }else{
            return res.status(400).json(new Message(err.status, err.message, [])); 
        }
    }

    async getMatchList(req, res) {

    }

    // 게임 서버에서 방이 비어있는경우 호출함
    async deleteMatch(req, res) {

    }

    async joinMatch(req, res) {
        const payload = jwt.decode(req.headers['x-access-token']);
        const roomId = req.params.roomId;
        const userId = payload.id;
        matchService.joinMatch(userId, roomId).then((data) => {
            return res.status(200).json(new Message(0, '매치 입장 성공했습니다.', data));
        }).catch((err) => {
            return res.status(400).json(new Message(err.status, err.message, []));
        });
    }

    async leaveMatch(req, res) {

        const payload = jwt.decode(req.headers['x-access-token']);
        const userId = payload.id;
        matchService.leaveMatch(userId).then((data) => {
            if (data === true)
                return res.status(200).json(new Message(0, '매치 퇴장 성공했습니다.', data));
            else {
                return res.status(200).json(new Message(Status.DB_ERROR, '방에 입장한 상태가 아닙니다.', data));
            }
        }).catch((err) => {
            return res.status(400).json(new Message(err.status, err.message, []));
        });
    }
}

module.exports = new MatchController();