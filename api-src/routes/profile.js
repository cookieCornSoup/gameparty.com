// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

const express  = require('express');
const router   = express.Router(); 
// 라우터 URL 지정
const URL = "/api/profile"; 

const checkAuth = require('../middlewares/check-auth');
const ProfileController = require('../controller/profile-controller');
router.post('/', checkAuth, ProfileController.createProfile );
router.get('/:id', checkAuth, ProfileController.getProfile );

module.exports ={
  router,
  url : URL
} ;