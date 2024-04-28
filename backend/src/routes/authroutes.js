const express = require("express")
const { signupUser, loginUser, logoutUser } = require("../controller/authcontroller")

const router = express.Router()

router.post("/login", loginUser)
router.post("/signup", signupUser)
router.post("/logout", logoutUser)

module.exports = router