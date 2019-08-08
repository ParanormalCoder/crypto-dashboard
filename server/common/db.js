const Sequelize = require('sequelize')

const conf = require('../conf/server')

module.exports = new Sequelize(
    conf.mysql.name,
    conf.mysql.username,
    conf.mysql.password,
    {
        dialect: conf.mysql.dialect,
        pool: conf.mysql.pool,
        port: conf.mysql.port,
        host: conf.mysql.host,
        sync: { force: true }
    }
)
