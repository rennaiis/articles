const express = require("express")
const router = express.Router
const db_controller = require("./db_controller")

router.get('/articles', db_controller.getAllArticles)
router.get('/articles/:id', db_controller.getArticleById)
router.post('/article/:id', db_controller.createArticle)
router.put('/article/:id', db_controller.updateArticle)