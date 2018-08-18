'use strict';
var faker = require('faker');

var data = [];

var gender = ['male','female'];
var age =[18,19,20,22,23];
for(var i=0;i<5;i++){

  var genderRamdom = gender[Math.floor(Math.random()*gender.length)];
  var ageRamdom = age[Math.floor(Math.random()* age.length)];

   data[i] = {
    id: '',
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    telephone: faker.phone.phoneNumber(),
    gender: genderRamdom,
    age:ageRamdom,
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
    return queryInterface.bulkInsert('users', data, {});
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