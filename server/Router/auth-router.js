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

router.route("/").get(autherController.home);
router.route("/register").post(autherController.register);

module.exports = router;
