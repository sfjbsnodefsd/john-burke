const { verify } = require("jsonwebtoken")

module.exports = {
    checkToken: (req, res, next) => {
        const token = req.get("authorization")
        if (token) {
            token = token.slice(7)
            verift(token, process.env.KEY, (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "Invalid token"
                    })
                } else {
                    next()
                }
            })

        } else {
            res.json({
                succss: 0,
                message: "Access denied, Unauthorized"
            })
        }
    }
}