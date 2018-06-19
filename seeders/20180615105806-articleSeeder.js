'use strict';
var faker = require('faker');
var data = [];
var typeArticle = [1,2,3];
for (var i = 0; i < 5; i++) {
  var typeArticleRamdom = typeArticle[Math.floor(Math.random() * typeArticle.length)];
  data[i] = {
    title: faker.lorem.sentence(),
    image: 'http://via.placeholder.com/350x150',
    des :faker.lorem.sentence(),
    type_article: typeArticleRamdom,
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
   return queryInterface.bulkInsert('articles', data, {});
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
