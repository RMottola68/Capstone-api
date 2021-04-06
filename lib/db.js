const {Sequelize} = require('sequelize');
//dont forget to update the credentials beelow
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:@Ragnarok742@@localhost/capstone-api', {logging: false});
module.exports = {sequelize};