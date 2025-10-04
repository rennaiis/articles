const { response } = require("express")
const {Article, Comment} = require("./models")

async function getAllArticles() {
    const articles = await Article.findAll()
    console.log(articles.map(Article => Article.toJSON()))
}

async function getArticleById(articleId) {
    const article = await Article.findByPk(articleId)
    if (article){
        console.log(article.toJSON())
    }else{
        console.log("Not found")
    }
}

async function createArticle(title, content) {
    const newArticle = await Article.create({title: title, content: content})
    console.log(newArticle.toJSON())
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
    console.log(comments.map(Comment => Comment.toJSON()))
}

async function getCommentById(commentId) {
    const comment = await Comment.findByPk(commentId)
    if (comment){
        console.log(comment.toJSON())
    }else{
        console.log("Not found")
    }
}

async function createComment(content, articleId) {
    const newComment = await Comment.create({content: content, articleId:articleId})
    console.log(newComment.toJSON())
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