/* 모든 라우터를 읽어서 배열형태로 exports 해주자. 그 외 라우터의 정보를 포함한다. */ 
const fs = require('fs');
const path = require('path'); 
const routes = [];

fs.readdirSync(__dirname).filter(file =>{
    return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js');
}).forEach(file =>{
    routes.push(require(path.join(__dirname, file))); 
    console.log(file, ' 라우터 자동등록 ');
});
 
 
function executeRoute(app){
    for(let i = 0; i < routes.length ; i++)
        app.use(routes[i].url, routes[i].router); 
}


module.exports = {
    routeUrls:{
      
    },
    routes,
    executeRoute : executeRoute
}  