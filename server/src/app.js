const express = require("express");
const multer = require("multer");
const postModel = require("./models/post.models");
const uploadFile = require("./services/storage.service");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5174", "http://127.0.0.1:5174"],
    credentials: true,
  })
);
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  res.status(201).json({
    message: "Posted data successfully!",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const post = await postModel.find();

  return res.status(200).json({
    posts: post,
  });
});

module.exports = app;
