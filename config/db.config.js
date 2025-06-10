const { default: Sequelize } = require("@sequelize/core");

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@Amin&1378',
    database: 'sequelize',
    logging:false
})

sequelize.authenticate().then(async()=>{
await sequelize.sync({alter:true})
console.log('connected to mysql');
}).catch(err=>{
    console.log(' cannot connected  to mysql error:',err?.message);
})
 module.exports={
    sequelize
 } 