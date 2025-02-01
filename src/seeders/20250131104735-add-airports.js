'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
        name : 'Chhatrapati Shivaji Maharaj International Airport Mumbai',
        cityId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        name : 'Kempegowda International Airport Bengaluru',
        cityId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        name : 'Sardar Vallabhbhai Patel International Airport Ahmedabad',
        cityId : 18,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        name : 'Chennai International Airport',
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        name : 'Netaji Subhash Chandra Bose International Airport',
        cityId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
        name : 'Jaipur International Airport',
        cityId : 13,
        createdAt : new Date(),
        updatedAt : new Date()
    },
    {
      name : 'Mangaluru International Airport',
      cityId : 6,
      createdAt : new Date(),
      updatedAt : new Date()
  }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
