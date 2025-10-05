require('dotenv').config()
const {sequelize} = require("./models")
const express = require("express")
const routes = require("./routes")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use('/', routes)

app.use(cors({
    origin:'http://localhost:8080',
    methods:['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
    allowedHeaders:['Content-Type']
}))
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