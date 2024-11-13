const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'estacionamento_db', //o nome do banco de dados
    'root', //o nome  do usuario
    '',//informando a senha

    {
        dialect:'sqlite',
        storage:'./estacionamento_db.sqlite'//nome do arquivo onde será salvo o nosso banco 
    }
)
module.exports = {sequelizeDb, sequelizeConfig}