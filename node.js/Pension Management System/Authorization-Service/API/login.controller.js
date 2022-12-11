const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const member = require("./login.model");

////////SIGNUP////////////
const SignUpMember = async (req, res, next) => {

  try {
    const { email, password } = req.body;
    const salt =  bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt)
    
    const member1 = await member.create({email, password: hash})
    member1.save()

    res.status(201)
    return res.json({
      message: 'Member Created!',
      result: email, password
    })
  } catch (err) {

   res.status(409)
    res.json(
      {
        error: err
      })
  }
}


///login///////
const loginMember = async (req, res) => {
  try {

    const email = await member.findOne({ email: req.body.email });
    if (!email) {
      return res.status(401).json({ message: "No email found..." })
    }

    const password = await bcrypt.compare(req.body.password, email.password)
    if (!password) {
      return res.status(401).json({ message: "Password not found" })
    }
    ////////create token for AUTH///////////
    const token = jwt.sign(
      { email: member.email, memberID: member._id },
      "secret", { expiresIn: 1800 })

    res.status(200).json({
      token: token
    })
  }
  catch (err) {
    console.log(err)
    res.status(401).json({ error: err, message: "Auth failedd" })
  }
}

module.exports = { SignUpMember,loginMember }
