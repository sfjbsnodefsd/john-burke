const token_validation = require("../../auth/token_validation");
const { createUser, deleteUser, getUsers, getUserById, updateUser, login } = require("./user.controller")
const router = require("express").Router();
let { checkToken } = require("../../auth/token_validation")


router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers)
router.get("/:id", checkToken, getUserById)
router.patch("/", checkToken, updateUser)
router.delete("/", checkToken, deleteUser)
router.post("/login", login)

module.exports = router;