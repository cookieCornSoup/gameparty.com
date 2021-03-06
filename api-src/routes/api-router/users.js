// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

var express  = require('express');
var router   = express.Router();

// 라우터 URL 지정
const URL = "/api";

router.get('/users/:id', function(req,res){
    let id = req.params.id;
    res.send(id);
});


module.exports ={
  router,
  url : URL
} ;