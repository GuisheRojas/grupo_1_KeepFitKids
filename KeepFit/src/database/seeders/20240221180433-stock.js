"use strict";
const { faker } = require("@faker-js/faker");
const db = require('../models');
// const { sizes, colors } = require("../../colorsAndSizesProducts");
// const stock = require("../models/stock");

module.exports = {
  async up (queryInterface, Sequelize) {
     const Colors = await db.Colors.findAll()
     const Sizes = await db.Sizes.findAll()
     const Products = await db.Products.findAll()
     const stock = [];
    Array(50)
    .fill(0)
    .forEach((_, i)=>{
      const randomColors = Colors[Math.floor(Math.random() * Colors.length)];
        //console.log(`Product ${i + 1} created at ${new Date().toISOString()}`);
        const randomSizes = Sizes[Math.floor(Math.random() * Sizes.length)];
        const randomProducts = Products[Math.floor(Math.random() * Products.length)];
        const randomQuantity = faker.number.int({ min: 1, max: 100 });
      const productData = {
        id: i + 1,
        quantity: randomQuantity,
        id_color: randomColors.id,
        id_size: randomSizes.id,
        id_product: randomProducts.id,
        
      };

      stock.push(productData)

    });
   await queryInterface.bulkInsert("stock", stock
   );
   
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stock", null, {});
  }
};
