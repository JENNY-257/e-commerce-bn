import jwt from "jsonwebtoken" ;
const generateToken = (userInfo) =>{
    try {
        const userToken = jwt.sign({userInfo},process.env.JWT_SECRET_KEY, { expiresIn: '4h' })
        return userToken;
    } catch (error) {
        return res.status(500).json({message:"failed to generate token"})
    }
};
export default generateToken;