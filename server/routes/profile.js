const express = require("express");
const router = express.Router();
const User = require("../models/user");
const multer = require("multer");

// Route URL to get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({}).lean();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

// Route URL to get user data by ID
router.get("/:id", async function (req, res, next) {
  try {
    const user = await User.findById(req.params.id).lean();
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching user data" });
  }
});

router.post("/edit-profile/update/:id", async (req, res) => {
  try {
    const updatedFields = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      tel: req.body.tel,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      cover_pic: req.body.cover_pic,
      profile_picture: req.body.profile_picture,
    };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error updating User data" });
  }
});

// Route URL to delete user profile by ID
router.delete("/edit-profile/delete/:id", async function (req, res, next) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting user" });
  }
});

module.exports = router;
