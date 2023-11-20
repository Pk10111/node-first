const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;

exports.Create = (req, res) => {
  try {
    console.log("req123", req.body);
    let userData = req.body;
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

exports.update = async (req, res) => {
  console.log("this functions is called");
  try {
    let userData = req.body;
    const id = req.params.id;
    console.log("id", id);
    console.log("userData update", userData);
    const test = await Users.update(userData, {
      where: { id: id },
      returning: true,
    });
    console.log("test", test);
    //  if(result) => {
    //   console.log("result", result);
    //   if (result === null || result == undefined) {
    //     res
    //       .status(200)
    //       .send({ data: result, message: "users updated successFully" });
    //   } else {
    //     res.status(400).send({
    //       message: "users not updated successFully Something went wrong !!",
    //     });
    //   }
    // });
  } catch (error) {
    res.status(500).send({
      error: error,
    });
  }
};
