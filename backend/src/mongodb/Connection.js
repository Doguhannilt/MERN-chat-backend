const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log("Connected to the DB")

    } catch (err) {
        console.log(err)
    }
}
 
module.exports = connectToMongoDb