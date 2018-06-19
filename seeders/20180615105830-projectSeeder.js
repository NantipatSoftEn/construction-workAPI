'use strict';
var faker = require('faker');
var data = [];
var type = [1,2,3];

for (var i = 0; i <  5; i++) {
  var typeRamdom = type[Math.floor(Math.random() * type.length)];

  data[i] = {
    name: faker.name.firstName(),
    type: typeRamdom,
    created_at: new Date(),
    updated_at: new Date()
  };
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
   return queryInterface.bulkInsert('projects', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
