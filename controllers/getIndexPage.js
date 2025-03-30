// eslint-disable-next-line import/no-extraneous-dependencies
const asyncHandler = require("express-async-handler");
const messages = require("../models/messages");

const newMessageEndpoint = "/new";

const getIndexPage = asyncHandler((req, res) => {
  res.render("index", { title: "Mini Messageboard", messages, newMessageEndpoint });
});

module.exports = getIndexPage;
