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
    await Article.update({title: title, content:content}, {
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