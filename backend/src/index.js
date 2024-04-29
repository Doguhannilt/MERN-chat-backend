const express = require("express")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authroutes")
const messageRoutes = require("./routes/authmessages")
const userRoutes = require("./routes/userroutes")
const connectToMongoDb = require("./mongodb/Connection")
const cookieParser = require("cookie-parser")

// APP
const app = express()

// DOTENV
dotenv.config()

// Cookie Parser
app.use(cookieParser())

// PORT
const PORT = process.env.PORT || 5000

app.use(express.json()) // to parse the incoming requests with JSON payloads

// AUTH
app.use("/api/auth", authRoutes)
// MESSAGE
app.use("/api/messages", messageRoutes)
// USER
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    // MongoDB
    connectToMongoDb()
})