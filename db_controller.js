const { response } = require("express")
const {Article, Comment} = require("./models")

async function getAllArticles(req, res) {
    const articles = await Article.findAll()
    res.json(articles)
}

async function getArticleById(req,res) {
    const articleId = req.params.id
    const article = await Article.findByPk(articleId)
    if (article){
        res.json(article)
    }else{
        console.log("Ошибка")
    }
}

async function createArticle(title, content) {
    const newArticle = await Article.create({title: title, content: content})
    return(newArticle)
}

async function updateArticle(title,content,articleId) {
    const updatedArticle = await Article.update({title: title, content:content}, {
        where:{
            id:articleId
        }
    })
}
async function deleteArticle(articleId) {
    await Article.destroy({
        where:{
            id:articleId
        }
    })
}

/*работа с комментариями!*/
async function getAllСomments(articleId) {
    const comments = await Comment.findAll({
        where:{
            articleId:articleId
        }
    })
    return(comments)
}

async function getCommentById(commentId) {
    const comment = await Comment.findByPk(commentId)
    if (comment){
       return(comment)
    }else{
        console.log("Not found")
    }
}

async function createComment(content, articleId) {
    const newComment = await Comment.create({content: content, articleId:articleId})
    return(newComment)
}

async function updateComment(content,articleId, commentId) {
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