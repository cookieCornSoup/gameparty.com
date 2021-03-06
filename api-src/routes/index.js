/* 모든 라우터를 읽어서 배열형태로 exports 해주자. 그 외 라우터의 정보를 포함한다. */ 
const fs = require('fs');
const path = require('path');

const routes = [];
fs.readdirSync(__dirname).filter(file =>{
    return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js');
}).forEach(file =>{
    routes.push(require(path.join(__dirname, file))); 
    console.log(file);
});
/* 라우터정보 */

const HOME = "/";


module.exports = {
    routeUrls:{
        HOME
    },
    routes
}