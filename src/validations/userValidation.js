import Joi from 'joi';




   export const signupValidatiionSchema = Joi.object({
        firstName:Joi.string().min(3).max(250).required(),
        lastName:Joi.string().min(2).max(250).required(),
        password:Joi.string().min(8).max(10).required(),
        email:Joi.string().email().lowercase().required()
    
    })

