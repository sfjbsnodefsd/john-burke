const express = require("express");
const {RegisterPensioner, getAllpensioner } = require("../controller/registerController");
const {loginPensioner} = require("../controller/loginTokenController")

const router = express.Router();

router.post("/login", loginPensioner);
router.get("/getAll", getAllpensioner);
router.post("/register", RegisterPensioner);
module.exports = router;
