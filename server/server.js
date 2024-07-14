const express = require("express");
const app = express();

app.use(express.json());

const authRouter = require("./Router/auth-router.js");  // Adjust path as necessary

app.use("/api/auth", authRouter);  // Mounting the router at /api/auth

app.get("/", (req, res) => {
    res.status(200).send("I am from Server");
});

app.get("/Register", (req, res) => {
    res.status(200).send("I am from Register Page");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
