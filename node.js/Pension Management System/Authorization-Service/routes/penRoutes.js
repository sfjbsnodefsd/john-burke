const express = require("express");
const RegisterPensioner = require("../controller/registerPenController");
const LoginPensioner = require("../controller/loginController")

const router = express.Router();

router.post("/register", RegisterPensioner);
router.post("/login", LoginPensioner);

module.exports = router;
