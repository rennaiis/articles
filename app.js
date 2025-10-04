require('dotenv').config()
const {sequelize} = require("./models")
const express = require("express")

const app = express()
app.use(express.json())
const port = process.env.PORT
async function test(){
    try{
        await sequelize.authenticate();
        console.log("БД на месте")
    }catch (error){
        console.error('ошибка подключения к бд!', error)
    }
}
test()
const { response } = require("express")
const {Article, Comment} = require("./models")
const article = require('./models/article')

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
deleteArticle(11)
app.get('/', (request, resoponse)=>{
    response.send("работает")
})
app.listen(port, ()=>console.log(`сервер запущен по ссылке http://localhost:${port}`))