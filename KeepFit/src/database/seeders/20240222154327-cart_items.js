'use strict';
const { faker } = require("@faker-js/faker");
const db = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {
    const Shopping_carts = await db.Shopping_carts.findAll();
    const Products = await db.Products.findAll();
    let Subtotal = 0;
    const cart_items = [];
    Array(50)
    .fill(0)
    .forEach((_,i)=>{
      const randomShopping_carts = Shopping_carts[Math.floor(Math.random() * Shopping_carts.length)];
      const randomProducts = Products[Math.floor(Math.random() * Products.length)];
      const randomQuantity = faker.number.int({ min: 1, max: 100 });
      Subtotal = (randomProducts.price * randomQuantity);

      const cartData = {
        id: i + 1,
        id_shopping_cart: randomShopping_carts.id,
        id_product: randomProducts.id,
        quantity: randomQuantity,
        subtotal: Subtotal

      }
      cart_items.push(cartData);
      
    })
    await queryInterface.bulkInsert("cart_items", cart_items);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("cart_items", cart_items);
  }
};
