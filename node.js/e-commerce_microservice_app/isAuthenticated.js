const jwt = require("jsonwebtoken")

module.exports = async function isAuthenticated(req, res, next) {
// Bearer <token>
console.log("authorization")
const token = req.headers["authorization"].split(" ")[1];

    jwt.verify(token, "secret", (err, user) => {
        if (err) {
            return res.json({
                success: 0,
                message: "Unauthorised",
            })
        } else {
            req.user = user
            next()
        }
    })
}