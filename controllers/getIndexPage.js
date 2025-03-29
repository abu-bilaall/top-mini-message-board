// eslint-disable-next-line import/no-extraneous-dependencies
const asyncHandler = require("express-async-handler");
const messages = require("../models/messages");

const getIndexPage = asyncHandler((req, res) => {
  console.log("getting /");
  res.render("index", { title: "Mini Messageboard", messages });
});

module.exports = getIndexPage;
