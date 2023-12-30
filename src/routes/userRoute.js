import { Router } from "express";
import { userRegister, verificationEmail } from "../controllers/userController.js";
import { signupValidationschema } from "../validations/userValidation.js";

const userRoute = Router();

userRoute.post('/signup', signupValidationschema, userRegister);
userRoute.get('/activate-account/:userActivationToken', verificationEmail)


export default userRoute;




