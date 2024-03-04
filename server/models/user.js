const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  firstname: {
    type: String,
    require: true, // ต้องมี
  },
  lastname: {
    type: String,
    require: true, // ต้องมี
  },
  date_of_birth: {
    type: Date,
    require: true, // ต้องมี
  },
  gender: {
    type: String,
    require: true,
  },
  tel: {
    type: String,
    require: true, // ต้องมี
  },
  profile_picture: String,
  cover_pic: String,
  is_admin: {
    type: Boolean,
    default: false,
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
