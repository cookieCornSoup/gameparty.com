/* passport의 인스턴스를 만들어 구글 Strategy를 관리 */
// created by shlifedev at 20210307 03:10.
// 
// author email : shlifedev@gmail.com

var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      : '609944114842-hnvcisj65dquooopj7f2b943vpk6qbul.apps.googleusercontent.com',
    clientSecret  : '5r7zMuqhKcjLswnMyxUuRfpn',
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, function(request, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;

    done(null, user);
  }
));

module.exports = passport;