// auth-router.js

const express = require("express");
const router = express.Router();  // Correct usage of Router

router.get("/", (req, res) => {
    res.status(200).send("I am from Server using router");
});

router.route("/UserRegister").get((req,res)=>{
    res.status(200).send("I am from Register Page through router route");
})

module.exports = router;
