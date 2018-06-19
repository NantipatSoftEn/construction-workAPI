'use strict';
var faker = require('faker');
var data = [];
var productId = [1,2,3,4,5];
var count =[2,4,5,6,7,8];

for (var i = 0; i < 5; i++) {
  var productIdRamdom = productId[Math.floor(Math.random() * productId.length)];
  var CountRamdom = count[Math.floor(Math.random() * count.length)];
  data[i] = {
    product_id: productIdRamdom,
    count: CountRamdom,
    checkout: 1,
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
   return queryInterface.bulkInsert('carts', data, {});
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
