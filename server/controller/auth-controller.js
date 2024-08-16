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

module.exports = { home, register };
