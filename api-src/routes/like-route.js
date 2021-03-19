// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const router   = express.Router();

const checkAuth = require('../middlewares/check-auth');
const LikeController = require('../controller/like-controller');
// 라우터 URL 지정
const URL = "/api/like";

 

router.post('/',  checkAuth, LikeController.likeUser);
 

module.exports ={
  router,
  url : URL
} ;