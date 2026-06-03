const Request = require("../models/Request");

const getAllrequests = async (req, res) => {
  try {
    const requsts = await Request.find()
      .select("-__v")
      .populate({
        path: "user",
        select: "firstName lastName email phoneNum ",
        populate: {
          path: "city",
          select: "-_id",
        },
      })
      .populate({
        path: "mosque",
        select: "name -_id",
        populate: {
          path: "city",
          select: "-_id",
        },
      });
    res.status(200).json({
      message: "fetching Done",
      data: requsts,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createRequest = async (req, res) => {
  try {
    const { quantity, mosque } = req.body;
    if (!quantity || !mosque) {
      return res.status(401).json({
        message: "data required",
      });
    }
    console.log(req.user.id);
    const request = await Request.create({
      quantity,
      mosque,
      user: req.user.id,
    });

    res.status(201).json({
      messsage: "created request sucsses",
      data: request,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getRequestsByuserId = async (req, res) => {
  try {
    console.log("hereee");
    const Requests = await Request.find({ user: req.user.id }).select("-__v")
      .populate({
        path: "user",
        select: "firstName lastName email phoneNum ",
        populate: {
          path: "city",
          select: "-_id",
        },
      })
      .populate({
        path: "mosque",
        select: "name -_id",
        populate: {
          path: "city",
          select: "-_id",
        },
      });
    
    if (!Requests) {
      return res.status(404).json({
        message: "no requests ",
      });
    }
    res.status(200).json({
      message: "fetcing done",
      data: Requests,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAllrequests,
  createRequest,
  getRequestsByuserId,
};
