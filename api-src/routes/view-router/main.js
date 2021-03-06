var express  = require('express');
var router   = express.Router();

// 라우터 URL 지정
const URL = "/";

router.get('/', function(req,res){
  
  res.render('test', {user: req.user});
});


module.exports ={
  router,
  url : URL
} ;