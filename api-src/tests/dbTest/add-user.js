const models = require('../../models'); 
const userService = require('../../services/user-service');
const passwordHelper = require('../../utils/helper/password-helper');
const  addUser = async (count)=>{
    let i = 0;
    for(i = 0; i < count; i++){
        const password = passwordHelper.encrypt('xptmxm123');
        const email = ['test', i, '@test.com'].join(''); 
        await userService.create(email, password.dbHashPassword, password.dbSalt);
    }
}

module.exports = addUser;