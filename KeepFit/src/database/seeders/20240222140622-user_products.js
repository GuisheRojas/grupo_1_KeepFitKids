"use strict";
const { faker } = require("@faker-js/faker");
const db = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     const Users = await db.Users.findAll()
     const Products = await db.Products.findAll()
     const user_products = [];
    Array(50)
    .fill(0)
    .forEach((_, i)=>{
      
      const randomUsers = Users[Math.floor(Math.random() * Users.length)];
      const randomProducts = Products[Math.floor(Math.random() * Products.length)];
      
      const user_product = {
        id: i + 1,
        id_user: randomUsers.id,
        id_product: randomProducts.id,
      };

      user_products.push(user_product)

    });
   await queryInterface.bulkInsert("user_products", user_products
   );
  },
   
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_products", null, {});
  }
};

  