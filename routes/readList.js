const express = require("express");
const router = express.Router();

const readList = require("../models/ReadList");

// get back all the posts
router.get("/", async (req, res) => {
  try {
    const list = await readList.find();
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

// specific post
router.get("/:postId", async (req, res) => {
  try {
    const list = await readList.findById(req.params.postId);
    res.json(list);
  } catch (err) {
    res.json({ message: err });
  }
});

// create readlist
router.post("/", async (req, res) => {
  const postList = new readList({
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

// add books to the list readlist.
router.patch("/add-book/:postId", async (req, res) => {
  try {
    const updateList = await readList.updateOne(
      { _id: req.params.postId },
      { $push: { myBooks: req.body.myBooks } }
    );
    updateList.res.json(updateList);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
