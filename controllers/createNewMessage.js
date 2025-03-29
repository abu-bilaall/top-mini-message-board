// eslint-disable-next-line import/no-extraneous-dependencies
const asyncHandler = require("express-async-handler");
const messages = require("../models/messages");
const ClientSideError = require('../errors/ClientSideError');

const addNewMessage = asyncHandler((req, res) => {
  const { message, author } = req.body;

  if (!message || !author) {
    throw new ClientSideError('Author or Message not specified.');
  }

  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = addNewMessage;
