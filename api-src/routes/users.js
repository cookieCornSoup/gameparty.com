// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const router   = express.Router();
const UserController = require('../controller/user-controller');
// 라우터 URL 지정
const URL = "/api";

router.get('/users/:id', function(req,res){
  const id = req.params.id;
  res.send(id); 
});

router.post('/users/', UserController.signUp);
 

module.exports ={
  router,
  url : URL
} ;