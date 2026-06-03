const express = require("express")
const { createRequest, getRequestsByuserId, getAllrequests } = require("../controllers/request.controller")
const authintication = require("../middlewares/authintication")
const reqRouter = express.Router()

reqRouter.post("/create" ,authintication, createRequest)
reqRouter.get("/getByUserid" ,authintication , getRequestsByuserId)
reqRouter.get("/" , authintication , getAllrequests)

module.exports = reqRouter