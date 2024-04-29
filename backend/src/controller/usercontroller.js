const User = require("../models/userModel")

exports.getusersForSlider = async (req,res) => {
    try {
        
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}})

        res.status(200).json(filteredUsers)

    } catch (err) {
        console.log(err)
    }
}