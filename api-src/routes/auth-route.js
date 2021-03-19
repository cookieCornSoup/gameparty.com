// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const router   = express.Router(); 
// 라우터 URL 지정
const URL = "/api/auth";
const AuthController = require('../controller/auth-controller');



router.post('/login', AuthController.signIn);
router.post('/verify', AuthController.verify);

 

module.exports ={
  router,
  url : URL
} ;