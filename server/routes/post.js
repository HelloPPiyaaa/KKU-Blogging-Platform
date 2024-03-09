const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// เพิ่มโพสต์บล็อกใหม่
router.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ดึงข้อมูลโพสต์บล็อกทั้งหมด
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ดึงข้อมูลโพสต์บล็อกตาม ID
router.get("/posts/:id", getPost, (req, res) => {
  res.json(res.post);
});

// แก้ไขข้อมูลโพสต์บล็อก
router.patch("/posts/:id", getPost, async (req, res) => {
  if (req.body.topic != null) {
    res.post.topic = req.body.topic;
  }
  if (req.body.category != null) {
    res.post.category = req.body.category;
  }
  if (req.body.image != null) {
    res.post.image = req.body.image;
  }
  if (req.body.content != null) {
    res.post.content = req.body.content;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ลบข้อมูลโพสต์บล็อก
router.delete("/posts/:id", getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Deleted Post" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware สำหรับการดึงโพสต์ตาม ID
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.post = post;
  next();
}

module.exports = router;
