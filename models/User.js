const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNum: { type: Number, required: true },
  password: { type: String, required: true },
  role: { type: mongoose.Types.ObjectId, required: true, ref: "Role" },
  city: { type: mongoose.Types.ObjectId, required: true, ref: "City" },
});

userSchema.pre("save", async function (next) {
  const Salt = parseInt(process.env.SALT ,10)
  this.password = await bcrypt.hash(this.password,Salt);
});




userSchema.methods.comparePassword = async function(password){
   return await bcrypt.compare( password,this.password)
}
module.exports = mongoose.model("User", userSchema);
