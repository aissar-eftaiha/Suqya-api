const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/SUQYA").then(()=>{
    console.log("connected to DB")
}).catch(()=>{

    console.log("not connected")
})
