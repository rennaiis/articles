'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments", [
      {content: "Как круто!", articleId: 1, createdAt: new Date(), updatedAt: new Date()},
      {content: "Согласен", articleId: 1, createdAt: new Date(), updatedAt: new Date()},
      {content: "Супер!", articleId: 2, createdAt: new Date(), updatedAt: new Date()}
      {content: "всё так!", articleId: 2, createdAt: new Date(), updatedAt: new Date()}
      {content: "Может быть", articleId: 3, createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
