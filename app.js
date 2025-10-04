require('dotenv').config()
const {sequelize0} = require("./models")
const express = require("express")

const app = express()
app.use(express.json())
const port = process.env.PORT

app.get('/', (request, response)=>{
    response.send("работает")
})
app.listen(port, ()=>console.log(`сервер запущен по ссылке http://localhost:${port}`))