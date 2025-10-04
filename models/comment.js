'use strict';
const {
  Model
} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.Article, {foreignKey:articleId})
    }
  }
  Comment.init({
    content: DataTypes.TEXT,
    articleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};