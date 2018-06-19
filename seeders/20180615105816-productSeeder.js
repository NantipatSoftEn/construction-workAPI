'use strict';
var faker = require('faker');
var data = [];
var type = [1,2,3];
var price =[55,800,900,40] 
for (var i = 0; i < 5; i++) {
  var typeRamdom = type[Math.floor(Math.random() * type.length)];
  var priceRamdom = price[Math.floor(Math.random() * price.length)];
  data[i] = {

    name: faker.name.firstName(),
    image: 'http://via.placeholder.com/350x150',
    type: typeRamdom,
    des: faker.lorem.sentence(),
    price: priceRamdom ,
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
   return queryInterface.bulkInsert('products', data, {});
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
