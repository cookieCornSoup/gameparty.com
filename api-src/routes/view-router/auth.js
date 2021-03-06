const express  = require('express');
const router   = express.Router(); 
const passport = require('../../config/passport.js'); 

// 라우터 URL 지정
const URL = "/auth";

router.get('/login', function(req,res){
  res.render('auth/login');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google'), authSuccess
);

function authSuccess(req, res) {
  res.redirect('/');
}

module.exports ={
  router,
  url : URL
} ;