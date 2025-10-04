'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Articles", [
      {title: "Название статьи 1", content:"текст статьи текст статьи текст статьи", createdAt: new Date(), updatedAt: new Date()},
      {title: "Название статьи 2", content:"текст статьи текст статьи текст статьи", createdAt: new Date(), updatedAt: new Date()},
      {title: "Название статьи 3", content:"текст статьи текст статьи текст статьи", createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  }
};
