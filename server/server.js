const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

require("dotenv").config()

//logger of every request
const { logger } = require("./middleware")

const app = express()

//routers
const auth_routers = require("./routers/auth_router") //authrouters
const store_routers = require("./routers/store_router") //authrouters

app.use(cors(), cookieParser(), express.json(), logger)
app.use("/auth", auth_routers)
app.use("/store", store_routers)

const server = app.listen(process.env.PORT || 3000, err => {
    console.log("Listening on port 3000")
})

app.get("/", (req, res) => {
    res.json({ data: "hello" })
})
