const jwt = require("jsonwebtoken")


//login
module.exports = LoginPensioner = async (req, res) => {
  const { email, password } = req.body;

  const person = await PensionModel.findOne({ email });
  if (!person) {
    return res.json({
      success: 0,
      message: "person doesnt exists",
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
    jwt.sign(payload, "secret", (err, token) => {
      if (err) console.log(err);
      else {
        return res.json({ token: token });
      }
    });
  }
};
