var express  = require('express');
var router   = express.Router();

// 라우터 URL 지정
const URL = "/api";

router.get('/', function(req,res){
    res.send("test");
});


module.exports ={
  router,
  url : URL
} ;