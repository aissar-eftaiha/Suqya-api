const express = require("express");
const cors = require("cors")
const roleRouter = require("./routes/role.route");
const cityRouter = require("./routes/city.route");
const userRouter = require("./routes/user.route");
const reqRouter = require("./routes/request.route");
const mosqeRouter = require("./routes/mosqe.route");
require("./models/db")
const app = express()
const PORT = 8000;

require("dotenv").config()

app.use(express.json())
app.use(cors({
    origin : "*" 
}))



app.use("/api/v1/roles",roleRouter )
app.use("/api/v1/cities",cityRouter)
app.use("/api/v1/mosqe", mosqeRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/requests", reqRouter )





app.listen(PORT ,()=>{
console.log(`app running on ${PORT}`)
})

