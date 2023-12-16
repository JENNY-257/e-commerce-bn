export const signup = {
    tags: ["User Authentication"],
    description: "Signup a user",
    operationId: "signUpUser",
    parameters: [],
    requestBody:{
    content:{
        'application/json':{
            schema:{
                type:'object',
                properties:{
                    firstName:{
                        type:'string',
                        example:'jeanne',
                    },
                    lastName:{
                        type:'string',
                        example:'rebero',
                    },
                    email:{
                        type:'string',
                        example:'sebo@gmail.com',
                    },
                    password:{
                        type:'string',
                        example:'parkido@123',
                    }
                },
            },
        },
    },
    },

    responses:{
        200:{
           description: 'user created succesfully'
        },
        500:{
            dewcription:'failed to create user account'
        },
    },
};