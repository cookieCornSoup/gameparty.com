// created by shlifedev at 20210307 03:11.
// 
// author email : shlifedev@gmail.com

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const sequelize = require('./models/index').sequelize;
require('dotenv').config();


const route = require('./routes/index'); 
const matchService = require('./services/match-service');

app.use(session({ secret: 'x7n3816x019327v9n9x8z0782', resave: false, saveUninitialized: true }));
// Passport setting
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


route.executeRoute(app);
// view engine
app.set("view engine", 'ejs');


//static assets
app.use(express.static('public'));






// sequelize.sync().then((data) => {
//   //console.log(data);
// }).catch((err) => {
//   console.log("에러" + err);
// });


// tests


// const userService = require('./services/userService');
// for(let i = 0; i < 1000; i++){ 
//   const id = 'test'+i+'@gmail.com';
//   const pw = '40b254399e9102faeacbedfab54515de638eaf388ff99de8e8e39aacdf7f3e1ed16f234d5cfa316300cc71cdd860bd67a3082b2e4891de90db793d920d1fd68a'
//   const salt = '1146920786558';
//   userService.create(id,pw,salt); 
// }



var port = 3001;
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

