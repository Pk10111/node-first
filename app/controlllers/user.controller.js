const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
  try {
    console.log("req123", req.body);
    let userData = req.body;
    console.log("userData", userData);
    if (!userData) {
      return res.status(400).send({ message: "hello world" });
    }
    // Checking if the username already exists in our database
    // create users
    const users = {
      name: userData.name,
      password: userData.password,
      email: userData.email,
      phone_number: userData.phone_number,
      address: userData.address,
      city: userData.city,
      state: userData.state,
      country: userData.country,
    };

    Users.create(users)
      .then((result) => {
        res.status(201).send({
          success: true,
          data: result,
          message: `User created successfully`,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
};
