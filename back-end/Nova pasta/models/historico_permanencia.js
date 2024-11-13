const {sequelizeDb, sequelizeConfig} = require ('./database')

const historico_permanencia = sequelizeConfig.define(
    'historico_permanencia',
    {
        data_entrada:{
            type:sequelizeDb.DATETIME
        },
        data_saida:{
            type:sequelizeDb.DATETIME
        },
        custo_total:{
            type:sequelizeDb.FLOAT
        }

    }
)

historico_permanencia.sync()
module.exports = historico_permanencia; 


