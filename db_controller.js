const { response } = require("express")
const {Article, Comment} = require("./models")
const article = require("./models/article")
const { where, Model } = require("sequelize")

async function getAllArticles(req, res) {
    try{
        const articles = await Article.findAll()
        res.json(articles)
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
}

async function getArticleById(req,res) {
    try{
    const id = req.params.id
    const article = await Article.findByPk(id)
    if (!article){
        res.status(404).json({ error: 'Статья не найдена' });
    }else{
        res.json(article)
    }
    
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
} 
async function createArticle(req, res) {
    try{
        const newArticle = await Article.create(req.body)
        res.json(newArticle)
    }catch(err){
        console.error(err)
        res.status(400).json({error: "Введите корректные данные"})
    }
}

async function updateArticle(req, res) {
    try{
        const updatedArticle = await Article.findByPk(req.params.id)
        if (!updatedArticle){
            res.status(404).json({error: "Cтатья не найдена"})
        }else{
            await updatedArticle.update(req.body)
            res.json(updatedArticle)
        }
    }catch(err){
        console.error(err)
        res.status(400).json({error: "Неверные данные"})
    }
    
}

async function deleteArticle(req, res) {
    try{
        const deletedArticle = await Article.findByPk(req.params.id)
        if (!deletedArticle){
            res.status(404).json({error: "Cтатья не найдена"})
        }else{
            await deletedArticle.destroy()
            res.json({message: "Статья удалена"})
        }
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
}

/*работа с комментариями!*/
async function getAllСomments(req, res) {
    try{
        const articleId = req.params.articleId
        const comments = await Comment.findAll({
        where:{
            articleId:articleId
        }
    })
    res.json(comments)
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
}

async function getCommentById(req, res) {
    try{
        const id = req.params.id
        const comment = await Comment.findByPk(id)
        if (!comment){
            res.status(404).json({ error: 'Комментарий не найден' });
        }else{
            res.json(comment)
        } 
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
}

async function createComment(req, res) {
    try{
        const newComment = await Comment.create(body)
        res.json(newComment)
    }catch(err){
        console.error(err)
        res.status(400).json({ error: 'Введите корректные значения'})
    }
    
}

async function updateComment(req, res) {
    try{
        const id = req.params.id
        const updatedComment = await Comment.findByPk(id)
        if(!updatedComment){
            res.status(404).json({ error: 'Комментарий не найден' })
        }else{
            res.json(updatedComment)
        }
    }catch(err){
        console.error(err)
        res.status(400).json({ error: 'Введите корректные значения'})
    }
    
}
async function deleteComment(req, res) {
    try{
        const id = req.params.id
        const deletedComment = await Comment.findByPk(id)
        if (!deletedComment){
            res.status(404).json({ error: 'Комментарий не найден' })
        }else{
            await Comment.destroy(comment)
            res.json.status(204).json({message: "Комментарий удалён"})
        }
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }    
}

async function filterComments(req,res){
    try{
        const dateFrom = new Date(req.query.dateFrom)
        const dateTo = new Date(req.query.dateTo)
        const ArticlesWithComments = Article.findAll({
            include:[{
                model: Comment,
                where: {
                    createdAt:{
                        [Op.between]:[dateFrom,dateTo]
                    }
                }
            }]
        })
        req.json(ArticlesWithComments)
    }catch(err){
        console.error(err)
        res.status(500).json({error: "Ошибка"})
    }
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
    deleteComment,
    filterComments
}