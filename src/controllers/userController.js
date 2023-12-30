import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import { sendEmail } from '../services/sendEmail.js';

export const userRegister = async(req,res) =>{
    try {
        const {firstName, lastName, email, password, role, isActive} = req.body;


        const checkEmailExist=  await User.findOne({email:email})

        if(checkEmailExist){
            return res.status(400).json({meassage:"email aleady exists"});
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

      
        const userActivationToken = jwt.sign(
            {email:email},
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
            )

            const createUser = await User.create({
                firstName,
                lastName,
                email,
                password:hashedPassword,
                role,
                isActive,
                userActivationToken
    
            });
        const url = `${process.env.FRONTEND_URL}users/signup/${userActivationToken}`

        const mailOptions = {
            to:createUser.email,
            subject: "Email activation Link",
            text: `Hello ${createUser.firstName}, Welcome! to Empire website!`,
            url,
        };
        try {
            await sendEmail(mailOptions);

        } catch (error) {
            console.log("hhhhhhhhhhhhh",error);
            return res.status(500).json({message:"failed to send email verification"})
        }

        return res.status(200).json({
        message:"user created succesfully please verify your email"
    })
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"failed to create user account"})
    }
};

export const verificationEmail = async(req, res) => {
    try {
        const {userActivationToken} = req.params;
        const verifyToken = jwt.verify(userActivationToken, process.env.JWT_SECRET_KEY);
        const {email} = verifyToken;
        const user = await User.findOne({email});

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(user.verified){
            return res.statu(400).json({message:"email already in use"});
        }
        user.verified = true;
      await user.save();
      return res.status(201).json({message:"Account activated succesfully"});
    } catch (error) {
        return res.status(500).json({message:"failed to activate email"})
    }

};



