const User = require('../Models/User-Models');
const bcrypt = require('bcryptjs');

const home = async (req, res) => {
    try {
        res.status(200).send("I am home section coming to you using auth controller");
    } catch (error) {
        console.log("error");
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });
        
        // Generate a JWT token
        
        res.status(201).json({ 
            msg: userCreated, 
            token: await userCreated.generateToken(),
            userId:usercreated._id.toString(),
        });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


//CODE FOR LOGIN FUNCTIONALITY

const Login=async (req,res)=>{
try{
const {email, password}=req.body;
const userExist= await User.findOne({email});
console.log(userExist)
if(!userExist){
    return res.status(400).json({message:'Invalid Credentials'});    
}

const user= await bcrypt.comapre(password, userExist.password)
if(user){
    res.status(201).json({ 
        msg: "Login Successfull", 
        token: await userExist.generateToken(),
        userId:userExist._id.toString(),
    });
}
else{
    res.status(401).json({message:"Invalid Credentials"})
}
}catch(error){
    res.status(500).json({ msg: "Internal Server Error" });
}
}

module.exports = { home, register, Login };
