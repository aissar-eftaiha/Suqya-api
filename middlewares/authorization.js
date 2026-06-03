const User = require("../models/User");
const authorization = (role) => {
  return async (req, res, next) => {
    const userId = req.user.id;
    const roleName = req.user.role;
    console.log(roleName)
    const user = await User.findById(userId).populate("role");
    if (roleName !== role) {
     return res.status(403).json({
        message: "Unauthorized",
      });
    }
    next();
  };
};


module.exports = authorization