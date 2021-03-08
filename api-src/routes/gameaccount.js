// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const gameaccountController = require('../controller/gameaccountController');
const checkAuth = require('../middlewares/checkAuth');
const router   = express.Router(); 
// 라우터 URL 지정
const URL = "/api/gameaccount";

 
router.post('/', checkAuth, gameaccountController.addGame); 
// gameid의 gameaccount가 본인의 것인지 인증하기 위한 verify 수단.verify 완료시 verified 값이 1이됨.
router.post('/verify/:gameid');

module.exports ={
  router,
  url : URL
} ;