const express = require("express");
const {getAllUsers} = require("../API/login.service");
const {RegisterPensioner, } = require("../controller/registerController")
const {loginPensioner} = require("./login.controller")

const router = express.Router();

router.post("/login", loginPensioner);
router.get("/getAll",getAllUsers);
router.post("/register", RegisterPensioner);
module.exports = router;
