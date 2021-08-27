const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 3000;

// import Routes
const postsRoute = require("./routes/posts");
const debatesRoute = require("./routes/debate");
const listRoute = require("./routes/readList");
const laterRoute = require("./routes/readLater");

// Middleware
app.use(bodyParse.json());
app.use(cors());

// ROUTES
app.use("/posts", postsRoute);
app.use("/debates", debatesRoute);
app.use("/readlist", listRoute);
app.use("/readlater", laterRoute);

app.get("/", (req, res) => {
  res.send("we are on home");
});

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("conneted DB")
);

// how to start listening to the server
app.listen(port, () => {
  console.log(`A NodeJS API is listining on port: ${port}`);
});
//app.listen(3000);
