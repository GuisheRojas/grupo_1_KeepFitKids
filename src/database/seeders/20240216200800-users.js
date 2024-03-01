"use strict";

const bcryptjs = require("bcryptjs");
const { faker } = require("@faker-js/faker");

const db = require('../models');


module.exports = {
  async up(queryInterface, Sequelize) {
    const Roles = await db.Roles.findAll();
    const users = [];
    const userRolesData = [];
    Array(5)
      .fill(0)
      .forEach((_, i) => {
        const randomRole = Roles[Math.floor(Math.random() * Roles.length)];
        console.log(`User ${i + 1} created at ${new Date().toISOString()}`);
        const randomUser = {
          id: i + 1,
          name: faker.internet.userName(),
          first_name: faker.person.firstName(),
          last_name: faker.person.lastName(),
          email: faker.internet.email(),
          password: bcryptjs.hashSync("123456", 10),
          avatar: faker.image.avatar(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        users.push(randomUser);

        const userRoleData = {
          id_user: randomUser.id,
          id_role: randomRole.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        userRolesData.push(userRoleData);
      });
    await queryInterface.bulkInsert("users", users);
    await queryInterface.bulkInsert("user_roles", userRolesData);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_roles", null, {});
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("roles", null, {});
  },
};
