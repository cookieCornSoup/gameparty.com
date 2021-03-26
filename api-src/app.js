// created by shlifedev at 20210307 03:11.
// 
// author email : shlifedev@gmail.com
 
//config load
require('dotenv').config();  
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const sequelize = require('./models/index').sequelize;
const matchService = require('./services/match-service');  
const models = require('./models'); 
const route = require('./routes/index');  
const swagger = require('./swagger');
swagger(app); 
// Passport setting 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
route.executeRoute(app);
// view engine
app.set("view engine", 'ejs'); 
//static assets
app.use(express.static('public'));

 
 
 
models.Match.destroy({
  where:{}
}).then(()=>{ 
   console.log("모든 매치 삭제됨");
}).catch((err)=>{
   console.log("에러" + err);
});


// sequelize.sync({
//   alter:true
// }).then((data) => {
//   //console.log(data);
// }).catch((err) => {
//   console.log("에러" + err);
// });


// tests


 
//require('./tests/dbTest/add-user')(100);

const test = require('./utils/hamster-jwt').signIn({'email' : 'shlifedev@gmail.com'});
console.log(test);
const port = 3001;
app.listen(port, function () {
  console.log('server on! http://localhost:' + port); 
  try{
  
    // 방생성 및 입장 테스트
    //  matchService.createAndJoinMatch(1, '테스트', '테스트', 0, 0).then((x)=>{
    //    console.log("로그 ㅡㅡㅡ " + x);
    //  });
  }
  catch(err){
     console.log("에러 ㅡㅡㅡ \n\n" + err);
  }
 
}); 

 