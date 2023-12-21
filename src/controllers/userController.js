import user from '../models/userModel.js';
import bcrypt from 'bcrypt';

const  userRegister = async(req,res) =>{
    try {
        const {firstName, lastName, email, password, role, isActive} = req.body;


        const checkEmailExist=  await user.findOne({email:email})

        if(checkEmailExist){
            return res.status(400).json({meassage:"email aleady exists"});
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const createUser = await user.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            role,
            isActive

        });
        return res.status(200).json({message:"user created succesfully", createUser})
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"failed to create user account"})
    }
}

export default userRegister;