// auth-router.js

// router.get("/", (req, res) => {
//     res.status(200).send("I am from Server using router");
// });


// router.route("/UserRegister").get((req,res)=>{
//     res.status(200).send("I am from Register Page through router route");
// })



const express = require("express");
const router = express.Router();
// const { home, register } = require("../controller/auth-controller");
// Another Method is 
const autherController=require("../controller/auth-controller")
const validate=require('../middleware/validate-middleware')
router.route("/").get(autherController.home);
router.route("/register").
post(validate(signupScheme),  autherController.register);
router.route("/login").post(autherController.login);

module.exports = router;
