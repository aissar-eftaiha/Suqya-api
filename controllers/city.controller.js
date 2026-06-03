const City = require("../models/City");

const addCity = async (req, res) => {
  try {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({
            message : "name required"
        })
    }
    const city = await City.create({
        name
    })
    res.status(201).json({
      message : "city Added",
      data : city
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

module.exports = {
    addCity
}