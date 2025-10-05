require('dotenv').config()
const {sequelize} = require("./models")
const express = require("express")
const routes = require("./routes")

const app = express()
app.use(express.json())
app.use('/', routes)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  next()
})
const PORT = process.env.PORT
async function test(){
    try{
        await sequelize.authenticate();
        console.log("БД на месте")
    }catch (error){
        console.error('ошибка подключения к бд!', error)
    }
}

const { response } = require("express")

/*app.get('/', (request, resoponse)=>{
    response.send("работает")
})*/
app.listen(PORT, ()=>console.log(`сервер запущен по ссылке http://localhost:${PORT}`))