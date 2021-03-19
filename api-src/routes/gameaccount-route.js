// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const gameaccountController = require('../controller/gameaccount-controller');
const checkAuth = require('../middlewares/check-auth');
const router   = express.Router(); 
// 라우터 URL 지정
const URL = "/api/gameaccount";

 
/**
 * @swagger
 *  /api/gameaccount:
 *    post:
 *      tags:
 *      - product
 *      description:  게임계정을 등록합니다.
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: gametype
 *          required: true
 *          schema:
 *            type: integer
 *            description: 게임의 타입
 *        - in: query
 *          name: nickname
 *          required: true
 *          schema:
 *            type: string
 *            description: 닉네임
 *      responses:
 *       200:
 *        description: 게임계정 등록 성공
 */
router.post('/', checkAuth, gameaccountController.addGame); 
// gameid의 gameaccount가 본인의 것인지 인증하기 위한 verify 수단.verify 완료시 verified 값이 1이됨.
router.post('/verify/:gameid');

module.exports ={
  router,
  url : URL
} ;