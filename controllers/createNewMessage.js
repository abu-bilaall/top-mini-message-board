// eslint-disable-next-line import/no-extraneous-dependencies
const asyncHandler = require("express-async-handler");
const db = require("../models/queries");
const ClientSideError = require('../errors/ClientSideError');

const addNewMessage = asyncHandler(async (req, res) => {
  const { message, author } = req.body;

  if (!message || !author) {
    throw new ClientSideError('Author or Message not specified.');
  }

  await db.addNewEntry(author, message, new Date());
  res.redirect("/");
});

module.exports = addNewMessage;
