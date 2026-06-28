const cors = require("cors")
require('dotenv').config()
const {sequelize} = require("./models")
const express = require("express")
const routes = require("./routes")


const app = express()
app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'POST', 'PUT', 'DELETE','OPTIONS'],
    allowedHeaders:['Content-Type']
}))
app.use(express.json())
app.use('/', routes)


const PORT = process.env.PORT
async function test(){
    try{
        await sequelize.authenticate();
    }catch (error){
        console.error('ошибка подключения к бд!', error)
    }
}


const { response } = require("express")

/*app.get('/', (request, resoponse)=>{
    response.send("работает")
})*/
test()
app.listen(PORT, ()=>console.log(`сервер запущен по ссылке http://localhost:${PORT}`))