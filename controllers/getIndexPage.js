// eslint-disable-next-line import/no-extraneous-dependencies
const asyncHandler = require("express-async-handler");
const db = require("../models/queries");

const getIndexPage = asyncHandler(async (req, res) => {
  const dbMessages = await db.getUsers();
  res.render("index", { title: "Mini Messageboard", dbMessages });
});

module.exports = getIndexPage;
