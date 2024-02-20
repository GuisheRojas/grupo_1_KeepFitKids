'use strict';

const { faker } = require("@faker-js/faker");
const db = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
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
          password: faker.internet.password({ length: 8, memorable:true, prefix:""  }),
          avatar: faker.image.avatar(),
           // createdAt: new Date(),
          // updatedAt: new Date()
        };
        users.push(randomUser);

        // Insertar en la tabla intermedia user_roles
        const userRolesData = {
          id_user: randomUser.id,
          id_role: randomRole.id,
          // createdAt: new Date(),
          // updatedAt: new Date()
        };
        queryInterface.bulkInsert('user_roles', [userRolesData]);
      });

    // Insertar usuarios en la tabla users
    await queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface, Sequelize) {
    // Eliminar todos los registros de las tres tablas
    await queryInterface.bulkDelete('user_roles', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('roles', null, {});
  }
};