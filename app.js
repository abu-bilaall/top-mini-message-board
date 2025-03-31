const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

// setting up views and the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// serving static assets
const assetPath = path.join(__dirname, 'public');
app.use(express.static(assetPath));

// parsing req.body
app.use(express.urlencoded({ extended: true }));

// mounting router
app.use("/", indexRouter);

// the error-buck stops with this
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send(err.message);
})

// server listening
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
