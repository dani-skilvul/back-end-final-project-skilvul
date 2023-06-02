"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "user1@gmail.com",
          nama: "user1",
          password:
            "$2b$10$FTGTo4jtk98yI1IxdiZlTuefTnPKQe5qyPbhg7O8a6evBBi6riPfW", // 123
        },
        {
          email: "user2@gmail.com",
          nama: "user3",
          password:
            "$2b$10$FTGTo4jtk98yI1IxdiZlTuefTnPKQe5qyPbhg7O8a6evBBi6riPfW", // 123
        },
        {
          email: "user3@gmail.com",
          nama: "user3",
          password:
            "$2b$10$FTGTo4jtk98yI1IxdiZlTuefTnPKQe5qyPbhg7O8a6evBBi6riPfW", // 123
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
