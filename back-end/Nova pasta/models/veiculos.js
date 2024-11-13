const database = require('./database')//impostando o bancp de dados
const historico_permanencia = require('./historico_permanencia')//importando a tabela de historico de permanencia

//criando a tabela

const veiculos = database.sequelizeConfig.define(
    'veiculos',//nome da tabela
    {
        placa:{
            type:database.sequelizeDb.VARCHAR
        },
        modelo:{
            type:database.sequelizeDb.VARCHAR
        }
    }
)
/*
não iremos criar os campos id_funcionário e a chave estrageira pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo sequelize

*/


//Criando a chave estrangeira
//estou dizendo que historico de permanencia possui muitos veiculos 

historico_permanencia.hasMany(veiculos,{
    onDelete:'CASCADE',
    onUPDATE:'CASCADE'
})

veiculos.belongsTo(historico_permanencia)//Estou dizendo que funcionário pertence a apenas 1 departamento

veiculos.sync()
module.exports = veiculos; //exportando a tabela para ser utilizada em outros arquivos