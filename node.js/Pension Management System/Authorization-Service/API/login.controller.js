const jwt = require("jsonwebtoken");
const createUser  = require("./login.service")




CreateloginUser: (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);

  createUser (body, (err, results) => {
      if (err) {
          console.log(err);
          return res.status(500).json({
              sucess: 0,
              message: "Database connnection error",
          });
      }
      return res.status(200).json({
          sucess: 1,
          data: results,
      });
  });
},




//login
function getUserDocument(req, res, next) {
  User.findOne({email: req.user.email}, (err, user) => {
     if (err || !user) {
         res.status('400').json({status: 'user-missing'});
     }
     req.userDocument = user;
     next();
  });
}
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
