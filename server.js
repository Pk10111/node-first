const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
const db = require("./app/models");
db.sequelize
  .sync()
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get("/", (req, res) => {
  res.json("Welcome to the palak's backend");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
