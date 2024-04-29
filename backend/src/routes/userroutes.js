const express = require("express")
const protectRoute = require("../middleware/protectRoute")
const { getusersForSlider } = require("../controller/usercontroller")

const router = express.Router()

router.get("/",protectRoute, getusersForSlider)

module.exports = router 