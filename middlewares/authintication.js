const jwt = require("jsonwebtoken")
const authintication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(403).json({
        message : "theres no token in header"
    })
  }
try{
  const token  = authHeader.split(" ")[1]
  const decode = jwt.verify(token , process.env.SECRET)
  console.log(decode)
  req.user = decode
  next()
}
catch(err){
res.status(500).json("token expired")
}
};

module.exports = authintication