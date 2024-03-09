const mongoose = require("mongoose");

// กำหนดโครงสร้างข้อมูลสำหรับโพสต์บล็อก
const postSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // เพิ่ม timestamps เพื่อบันทึกวันที่สร้างและแก้ไข

// สร้างโมเดลโพสต์บล็อกจาก schema ที่กำหนด
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
