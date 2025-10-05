const express = require("express")
const router = express.Router()
const db_controller = require("./db_controller")

router.get('/articles', db_controller.getAllArticles)
router.get('/article/:id', db_controller.getArticleById)
router.post('/article', db_controller.createArticle)
router.put('/article/:id', db_controller.updateArticle)
router.delete('/article/:id', db_controller.deleteArticle)

router.get('/article/:articleId/comments/', db_controller.getAllСomments)
router.get('/article/:articleId/comment/:id/',db_controller.getCommentById)
router.post('/article/:articleId/comment', db_controller.createComment)
router.put('/article/:articleId/comment/:id/', db_controller.updateComment)
router.delete('/article/:articleId/comment/:id/', db_controller.deleteComment)

router.get('/analytic/comments', db_controller.filterComments)
module.exports = router
