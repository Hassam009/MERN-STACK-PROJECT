

const User=require('../Models/User-Models')
const bcrypt=require('bcryptjs')




const home = async (req, res) => {
    try {
        res.status(200).send("I am home section come to you using auth controller");
    } catch (error) {
        console.log("error");
    }
};

//TO SECURE PASSWORD USE BELOW METHODS IT USES THROUGH BCRYPT
const saltRound=10;
const hash_password= await bcrypt.hash(password, saltRound)
//BUT THERE IS ALSO ANOTHER WAY WHICH IS PRE METHOD IT USED IN User-Models

const register = async (req, res) => {
    try {
     const {username, email, phone, password}=req.body;
     const userExist= await User.findOne({email:email})
     if(userExist){
         return res.status(400).json({msg:"email already Exist"})
     }
     await User.create({username, email, phone, password });
        res.status(200).json({ message: req.body });
    } catch (error) {
        res.status(400).send({ msg: "page not found" });
    }
};

module.exports = { home, register };
