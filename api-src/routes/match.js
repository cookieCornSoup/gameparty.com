// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const { createMatch } = require('../controller/match-controller');
const router   = express.Router();

const checkAuth = require('../middlewares/check-auth');  
// 라우터 URL 지정
const URL = "/api/match";

 
//  방입장 상태에서 연결 끊길시 -> 방에서 자동으로 퇴장

// 매치 생성하기
router.post('/',  checkAuth, createMatch);

// 매치 가져오기
router.get('/',  (req,res)=>{res.send('zz');});
 
// 요청한 유저의 현재있는방 매치 삭제하기
// 1. 요청 플레이어가 방장이어야 함
// 2. 요청 플레이어가 방에 입장한 상태여야함.
router.delete('/',  checkAuth);

// 방 입장하기
// 1. 다른방에 입장한 상태가 아니어야 함.
router.post('/match/join/:id')  

// 방 나가기
// 1. 방에 입장한 상태여야함
router.post('/match/leave/:id') 


module.exports ={
  router,
  url : URL
} ;