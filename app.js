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
app.get('/', (request, resoponse)=>{
    response.send("работает")
})
app.listen(port, ()=>console.log(`сервер запущен по ссылке http://localhost:${port}`))