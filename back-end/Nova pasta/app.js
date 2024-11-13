// CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 4000

//configurar express para receber os dados do formulario
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//CONFIGURANDO HAMDLEBARS
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine', 'handlebars')//definindo o handlebars como mecanismo de visualização padrão


//CARREGANDO ROTAS
//const veiculosRouter = require('./routes/veiculos')

//utilizando rotas
//app.use('/veiculos',veiculosRouter)

//EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req,res)=>{
  res.send("Bem vindo ao sistema de veículos")
    res.render('home')
})

//EXECUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})