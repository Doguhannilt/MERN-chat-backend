const express = require("express")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authroutes")
const connectToMongoDb = require("./mongodb/Connection")

// APP
const app = express()

// DOTENV
dotenv.config()

//PORT
const PORT = process.env.PORT || 5000

app.use(express.json()) // to parse the incoming requests with JSON payloads


app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    // MongoDB
    connectToMongoDb()
})