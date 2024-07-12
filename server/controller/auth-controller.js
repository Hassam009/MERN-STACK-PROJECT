const home = async (req, res) => {
    try {
        res.status(200).send("I am home section come to you using auth controller");
    } catch (error) {
        console.log("error");
    }
};

const register = async (req, res) => {
    try {
        res.status(200).send("I am from Register Page through router route using controller installed nodemon");
    } catch (error) {
        res.status(400).send({ msg: "page not found" });
    }
};

module.exports = { home, register };
