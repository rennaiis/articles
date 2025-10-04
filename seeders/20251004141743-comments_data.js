'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments", [
      {content: "текст комментария", articleId: 0, createdAt: new Date(), updatedAt: new Date()},
      {content: "текст комментария", articleId: 0, createdAt: new Date(), updatedAt: new Date()},
      {content: "текст комментария", articleId: 2, createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
