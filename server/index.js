const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(express.json());

const mongoURL = "mongodb://localhost:27017/blogging";
mongoose.connect(mongoURL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
