// created by shlifedev at 20210307 03:11.
// 
// author email : shlifedev@gmail.com

const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const session   = require('express-session');
const passport  = require('passport');
const sequelize = require('./models/index').sequelize;
require('dotenv').config();

 
const route = require('./routes/index'); 




sequelize.sync().then( (data)=>{
    //console.log(data);
}).catch((err)=>{
    //console.log(err);
});
 
app.use(session({secret:'x7n3816x019327v9n9x8z0782', resave: false, saveUninitialized:true}));
// Passport setting
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 


route.executeRoute(app);
// view engine
app.set("view engine", 'ejs');

 
//static assets
app.use(express.static('public'));


var port = 3001;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});