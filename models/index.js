'use strict'

const Sequelize = require('sequelize')

/*
  JNode:   数据库名称
  root:    mysql数据库用户名
  123456： mysql数据库密码
 */
const db = new Sequelize('JNode', 'root', '123456', Conf.db.mysql)

/* 导入表格 */
const t = require('./tables')(db)


/* 数据库鉴权 */
db.authenticate().then(function(err) {
    console.log('Connection has been established successfully.')
}).catch(function (err) {
    console.log('Unable to connect to the database:', err)
})

/* 导入数据库 */
db.sync()

module.exports = {
    t: t,
    db: db
}
