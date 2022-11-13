const express = require("express");
const {loginMember,SignUpMember } = require("./login.controller")

const router = express.Router();

router.post("/login", loginMember);
router.post("/SignUp", SignUpMember );

module.exports = router;
