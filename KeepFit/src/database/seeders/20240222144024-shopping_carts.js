"use strict";
const { faker } = require("@faker-js/faker");
const db = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const Users = await db.Users.findAll()
    const shopping_carts = [];
    Array(50)
    .fill(0)
    .forEach((_, i)=>{
      const randomUsers = Users[Math.floor(Math.random() * Users.length)];
      const shopping_cart = {
        id: i + 1,
        id_user: randomUsers.id,
      };

      shopping_carts.push(shopping_cart)

    });
   await queryInterface.bulkInsert("shopping_carts", shopping_carts
   );
  },
   
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shopping_carts", null, {});
  }
};

  