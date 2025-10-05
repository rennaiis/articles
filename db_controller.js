const { response } = require("express")
const {Article, Comment} = require("./models")
const article = require("./models/article")

async function getAllArticles(req, res) {
    const articles = await Article.findAll()
    if (articles){
        res.status(200).json(articles)
    }else{
        res.status(500).json({error: "Ошибка"})
    }
    
} //готово

async function getArticleById(req,res) {
    const articleId = req.params.id
    const article = await Article.findByPk(articleId)
    if (article){
        res.json(article)
    }else{
        res.status(500).json({error: "Ошибка"})
    }
} 
async function createArticle(req, res) {
    const newArticle = await Article.create(req.body)
    if (newArticle){
        res.json(newArticle)
    }else{
        res.status(500).json({error: "Ошибка"})
    }
}

async function updateArticle(req, res) {
    const updatedArticle = await Article.findByPk(req.params.id)
    await updatedArticle.update(req.body)
    if (updatedArticle){
        res.json(updatedArticle)
    }else{
        res.status(500).json({error: "Ошибка"})
    }
    
}

async function deleteArticle(req, res) {
    const deletedArticle = await Article.findByPk(req.params.id)
    await deletedArticle.destroy()
    res.json.status(204).json({message: "Статья удалена"})
}

/*работа с комментариями!*/
async function getAllСomments(req, res) {
    articleId = req.params.articleId
    const comments = await Comment.findAll({
        where:{
            articleId:articleId
        }
    })
    res.json(comments)
}

async function getCommentById(req, res) {
    articleId = req.params.articleId
    id = req.params.id
    const comment = await Comment.findByPk(id)
    if (comment){
        res.json(comment)
    }else{
        res.status(404).json({error: "Ошибка"})
    }
}

async function createComment(req, res) {
    const newComment = await Comment.create(body)
    res.json(newComment)
}

async function updateComment(req, res) {
    id = req.params.id
    const comment = await Comment.findByPk(id)
    if (comment){
       res.json(comment)
    }else{
        res.status(404).json({error: "Ошибка"})
    }
    await Comment.update({content: content, articleId:articleId}, {
        where:{
            id:commentId
        }
    })
}
async function deleteComment(commentId) {
    await Comment.destroy({
        where:{
            id:commentId
        }
    })
}

module.exports = {
    getAllArticles,
    getAllСomments, 
    getArticleById,
    getCommentById,
    createArticle,
    createComment,
    updateArticle,
    updateComment,
    deleteArticle,
    deleteComment
}