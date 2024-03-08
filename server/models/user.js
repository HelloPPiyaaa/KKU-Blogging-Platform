const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true, // ต้องมี
  },
  lastname: {
    type: String,
    required: true, // ต้องมี
  },
  date_of_birth: {
    type: Date,
    required: true, // ต้องมี
  },
  gender: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true, // ต้องมี
  },
  profile_picture: {
    type: String,
  },
  cover_pic: {
    type: String,
  },
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
