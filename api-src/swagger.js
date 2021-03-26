const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions ={
    swaggerDefinition:{
      openapi: '3.0.0',
      components: {
        securitySchemes:{
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          },
          apiKeyAuth:
          { 
            type: 'apiKey',
            in: 'header',
            name: 'X-API-Key'
          }
        }
        
      }, // ADD THIS LINE!!!
      info:{
          title : 'api',
          description : 'api infomation',
          contact : {name : 'shlifedev'},
          servers : ['http://localhost:3001']
      },
      security: [{
        bearerAuth: []
      }]
    }, 
    // routes
    apis : ['./routes/*.js', './swagger/*']
  }  
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);


  const init = (app)=>{
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); 
  }

  module.exports = init;