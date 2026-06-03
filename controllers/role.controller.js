const Role = require("../models/Role");

const createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    if (!name || !permissions) {
      return res.status(400).json({
        message: "name or permission required",
      });
    }
    const role = await Role.create({
      name,
      permissions,
    });

    res.status(201).json({
      message: "role created successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

const fetchingRoles = async (req, res) => {
  try {
    const roles = await Role.find()
  res.status(200).json({
    message : "fentching Done",
    data  : roles
  })
} catch (err) {
    res.status(500).json({
        message : "internal server error"
    })
}
};


module.exports = {
    fetchingRoles,
    createRole
}