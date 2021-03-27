const { Message, Status } = require('../global/message');
const ServiceError = require('../exceptions/service');
const models = require('../models');
const { validateEmail } = require('../utils/validate/stringFormat');

class RecruitService {

    // 모집글을 찾습니다.
    async findById(id)
    {
        try {
            const result = await models.Recruit.findByPk(id);
            return result;
        } catch (error) {
            throw new ServiceError(400, Status.DB_ERROR, 'recruit delete service error by database error');
        }
    }

    //해당 모집글을 삭제합니다.
    async delete(id)
    {
        try {
            const result = await findById(id);
            if(result){
                const destroyResult = result.destroy();
                return result;
            }else{
                throw new ServiceError(404, Status.RECRUIT_NOT_FOUND, "")
            }
        } catch (error) {
            throw new ServiceError(400, Status.DB_ERROR, 'recruit delete service error by database error');
        }
    }


    async create(title, description, gametype, matchtype, game_skill) {
        try {
            const create = await models.Recruit.create({
                title: title,
                description: description,
                gametype: gametype,
                matchtype: matchtype,
                game_skill: game_skill
            });
        } catch (error) {
            throw new ServiceError(400, Status.DB_ERROR, 'recruit create error by database error');
        }
    }
}



module.exports = new RecruitService();
