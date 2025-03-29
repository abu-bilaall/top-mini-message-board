const { Router } = require("express");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const msgRouter = Router();

msgRouter.get("/", (req, res) => res.render("form"));
msgRouter.post("/", (req, res) => {
  const { message, author } = req.body;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect('/')
});

module.exports = msgRouter;
