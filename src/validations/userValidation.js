import Joi from "joi"
const signupSchem = Joi.object({
    "firstName":Joi.string().required().min(1),
    "lastName":Joi.string().required().min(1),
    "email":Joi.string().email().required(),
    "password":Joi.string().required()
});

export const signupValidationschema = (req, res, next) => {
    
    const {error} = signupSchem.validate(req.body,{
        abortEarly:false,
    });
    if(error){
        return res.status(400).json({ 
            error: error.details[0].message.replace(/[^a-zA-Z0-9 ]/g, ''),
        });
    }
    next();
}