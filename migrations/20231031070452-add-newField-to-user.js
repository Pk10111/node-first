"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "rollno", {
      type: Sequelize.STRING,
      allowNull: true, // Modify this based on your requirements
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "rollno");
  },
};
