import { signup } from "./src/documentation/userDoc.js"
export const swaggerDocumentation = {
    'openapi':'3.0.1',
    'info':{
        'version':'1.0.0',
        'title':'e-commerce',
        'description':'welcom on our online shop',
        'contact':{
            'name':'eCommerce website',
            'email':'onlineshop@gmail.com'
        },

    },
    'servers':[
        {
        url:'http://localhost:5000',
        description:'localhost',
        },
        {
        
            url:`${process.env.DEPL_url}`,
            description:'deployed url',
        }
    ],

    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            scheme: 'bearer',
            in: 'header',
          },
        },
      },

    paths:{
        '/api/v1/users/signup':{
            post:signup,
        },
    }
}