const Mosqes = require("../models/Mosqe");

const addMosqe = async (req, res) => {
  try {
    const { name, city } = req.body;

    const mosqe = await Mosqes.create({
      name,
      city
    });

    res.status(201).json({
      message: "mosqe created ",
      data: mosqe,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
    addMosqe
}
