const express = require("express");
const router = express.Router();

const readLater = require("../models/ReadLater");

// get back all the posts
router.get("/", async (req, res) => {
  try {
    const list = await readLater.find();
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post
router.get("/:postId", async (req, res) => {
  try {
    const list = await readLater.findById(req.params.postId);
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

// create readLater
router.post("/", async (req, res) => {
  const postList = new readLater({
    nameList: req.body.nameList,
    description: req.body.description,
    myBooks: req.body.myBooks
  });

  try {
    const savedList = await postList.save();
    res.json(savedList);
  } catch (err) {
    res.json({ message: err });
  }
});

// add books to the list readLater.
router.patch("/add-book/:postId", async (req, res) => {
  try {
    const updateList = await readLater.updateOne(
      { _id: req.params.postId },
      { $push: { myBooks: req.body.myBooks } }
    );
    updateList.res.json(updateList);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
