'use strict';

const { faker } = require("@faker-js/faker");
//const db = require('../models');

module.exports = {
  async up(queryInterface) {
    const Roles = await db.Roles.findAll();
    const users = [];
    Array(50)
      .fill(0)
      .forEach((_, i) => {
        const randomRole = Roles[Math.floor(Math.random() * Roles.length)];       
        const randomUser = {
          id: i + 1,
          name: faker.internet.userName(),
          first_name: faker.person.firstName(),          
          last_name: faker.person.lastName(),         
          email: faker.internet.email(),
          password: faker.internet.password({length: 8}, false, /(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/),
          id_role: randomRole.id,
          avatar: faker.image.avatar()         
        };
        users.push(randomUser);
      })
    await queryInterface.bulkInsert("users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};