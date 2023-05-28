"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "john.doe@example.com",
          nama: "John Doe",
          password: "abc123",
        },
        {
          email: "jane.smith@example.com",
          nama: "Jane Smith",
          password: "qwerty",
        },
        {
          email: "ahmad.fauzi@example.com",
          nama: "Ahmad Fauzi",
          password: "indonesia123",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
