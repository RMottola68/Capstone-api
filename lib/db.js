const {Sequelize} = require('sequelize');
//dont forget to update the credentials beelow
const sequelize = new Sequelize('mysql://root:@Ragnarok742@@localhost/capstone-api');
module.exports = {sequelize};

//alternate hosting information: 'mysql://root:@Ragnarok742@@localhost/capstone-api' || 'mysql://bc867e6946acd3:e133501e@us-cdbr-east-03.cleardb.com/heroku_4d668b0fc715d8c?reconnect=true' || 'mysql://bc867e6946acd3:e133501e@us-cdbr-east-03.cleardb.com/heroku_4d668b0fc715d8c?reconnect=true' || process.env.CLEARDB_DATABASE_URL, {logging: false}