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

    await queryInterface.bulkInsert('Airplanes', [{
      modelNumber : 'Airbus A380',
      capacity : 1000,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      modelNumber : 'Boeing 727',
      capacity : 800,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      modelNumber : 'Airbus A340',
      capacity : 700,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      modelNumber : 'Boeing 747-400',
      capacity : 900,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      modelNumber : 'The 747',
      capacity : 500,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
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
