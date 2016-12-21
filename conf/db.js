const Sequelize = require('sequelize')

module.exports = {
    mysql: {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
        timezone: 'Asia/Shanghai',  /* 时区 */
        logging: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        /* 事务隔离级别为最高 */
        isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.SERIALIZABLE
    }
}
