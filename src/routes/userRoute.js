import { Router } from "express";
import { userRegister } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/signup',userRegister);


export default userRoute;




