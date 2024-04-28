const User = require("../models/userModel")
const bcryptjs = require("bcrypt")
const generateToken = require("../utils/Token")

exports.loginUser = (req,res) => {
    console.log("LoginUser")
}
exports.logoutUser = (req,res) => {
    console.log("LogOutUser")
}
exports.signupUser = async (req,res) => {
   try {
    const  {fullName, username, password,confirmPassword,gender}= req.body
    
    if(password !== confirmPassword){
        return res.status(400).json({message: "Password didn't match"})
    }

    const user = await User.findOne({username})

    if(user){
        return res.status(400).json({message:"Username Already Exists"})
    }

    // Hash Pass Here
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password,salt)

    // https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/girld?username=${username}`

    // New User
    const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender==="male" ? boyProfilePic : girlProfilePic
    }) 

    if(newUser) {
    // Generate JWT token here
    generateToken(newUser._id,res)
    await newUser.save()

    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username:newUser.username
    })}
    else {
        res.status(400).json({error: "Invalid User Data"})
    }

} catch (err) {
    console.log(err)
    res.status(500).json({error:"Internal Server Error"})
   }
}
