const { Router } = require("express");
const getIndexPage = require('../controllers/getIndexPage');
const getNewMessageForm = require("../controllers/getNewMessageForm");
const createNewMessage = require("../controllers/createNewMessage");

// initialzizing router
const indexRouter = Router();

// home route method
indexRouter.get("/", getIndexPage);

// new route methods
indexRouter.route("/new").get(getNewMessageForm).post(createNewMessage);  

module.exports = indexRouter;
