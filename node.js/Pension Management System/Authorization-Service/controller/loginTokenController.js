const jwt = require("jsonwebtoken");
//const {RegisterPensioner} = require("./registerController");

//login
const loginPensioner = async (req, res) => {
  const { email, password } = req.body;

  const person = await PensionModel.findOne({ email });
  if (!person) {
    return res.json({
      success: 0,
      message: "email doesnt exists",
    });
  } else {
    if (password !== person.password) {
      //incorrect
      return res.json({
        success: 0,
        message: "Incorrect Password",
      });
    }
    const payload = {
      email,
      name: person.name,
    };
    jwt.sign(payload, "secret",{expiresIn: 1800}, (err, token) => { //expires after 30mins? {expiresIn: '30m'} <-may work too untested
      if (err) console.log(err);
      else {
        return res.json({ token: token});
      }
    });
  }
};
//RegisterPensioner.payload = token

module.exports = { loginPensioner };
