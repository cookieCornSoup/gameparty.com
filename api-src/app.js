const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const session   = require('express-session');
const passport  = require('passport');
const sequelize = require('./models/index').sequelize;




sequelize.sync().then( (data)=>{
    //console.log(data);
}).catch((err)=>{
    //console.log(err);
});
 
app.use(session({secret:'x7n3816x019327v9n9x8z0782', resave: false, saveUninitialized:true}));
// Passport setting
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/main'));
app.use('/auth', require('./routes/auth'));


// view engine
app.set("view engine", 'ejs');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

//static assets
app.use(express.static('public'));


var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});