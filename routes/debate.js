const express = require("express");
const router = express.Router();

const Debate = require("../models/PostDebate");

// get back all the posts
router.get("/", async (req, res) => {
  try {
    const debates = await Debate.find();
    res.json(debates);
  } catch (err) {
    res.json({ message: err });
  }
});

//prueba
router.get("/respuesta", async (req, res) => {
  try {
    const debates = await Debate.find();
    let de = debates.map(data => data.z_debate);
    res.json(de);
  } catch (err) {
    res.json({ message: err });
  }
});

// submits a post
router.post("/", async (req, res) => {
  const postDebate = new Debate({
    books: req.body.books,
    readList: req.body.readList,
    list: req.body.list,
    a_writtenPost: req.body.a_writtenPost,
    public_metrics: req.body.public_metrics
  });

  try {
    const savedDebate = await postDebate.save();
    res.json(savedDebate);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post
router.get("/:postId", async (req, res) => {
  try {
    const debate = await Debate.findById(req.params.postId);
    res.json(debate);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete post
router.delete("/:postId", async (req, res) => {
  try {
    const removeDebate = await Debate.remove({ _id: req.params.postId });
    res.json(removeDebate);
  } catch (err) {
    res.json({ message: err });
  }
});

// update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updateDebate = await Debate.updateOne(
      { _id: req.params.postId },
      { $set: { writtenPost: req.body.writtenPost } }
    );
    res.json(updateDebate);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
