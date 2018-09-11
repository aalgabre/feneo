const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  next();
});

app.use('/api/posts', (req, res, next) => {

  const test = { name: "Andrew" };
  const test2 = { number: 5 };

  res.status(200).json({ ...test, ...test2, ...process.argv });
});

module.exports = app;

