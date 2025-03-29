const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

// setting up views and the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parsing req.body
app.use(express.urlencoded({ extended: true }));

// mounting router
app.use("/", indexRouter);

// the error-buck stops with this middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode | 500).send(err.message);
})

// server listening
const PORT = 6500;
const HOSTNAME = "localhost";
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at: http://${HOSTNAME}:${PORT}`);
});
