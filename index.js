const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(3000, () => {
  console.log("Server is up at 3000");
});
