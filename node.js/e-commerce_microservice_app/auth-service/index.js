const express = require("express")
const mongoose = require("mongoose")
const User = require("./User")
const jwt = require("jsonwebtoken")
const app = express()
const PORT = 5000
app.use(express.json())


mongoose.connect("mongodb://localhost:/auth-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(`Auth service db connected`)
})

//register
app.post("/auth/reg", async (req, res) => {
    const { email, password, name } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.json({
            success: 0,
            message: "user already exists"
        })
    } else {
        const newUser = new User({
            name,
            email,
            password
        })
        newUser.save()
        return res.json(newUser)
    }
})
//login
app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        return res.json({
            success: 0,
            message: "user doesnt exists"
        })
    } else {
        if (password !== user.password) {
            return res.json({
                success: 0,
                message: "Incorrect Password"
            })

        }
        const payload = {
            email,
            name: user.name
        }
        jwt.sign(payload, "secret", (err, token) => {
            if (err) console.log(err)
            else {
                return res.json({ token: token })
            }
        })
    }
})


app.listen(PORT, () => {
    console.log(`AUTH SERVICE AT ${PORT}`)
})
