module.exports = (app) => {
  console.log("routes file is calling");
  const user = require("../controlllers/user.controller.js");
  var router = require("express").Router();
  // Create a new User
  router.post("/", user.Create);
  router.put("/:id", user.update);

  app.use("/api/users", router);
};
