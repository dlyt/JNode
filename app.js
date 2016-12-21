'use strict'

var express = require('express')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var lightco = require('lightco')
var path = require('path')

/* 全局访问 */
global.Conf = require('./conf')
global.Models = require('./models').t
global.sequelize = require('./models').db

/* app 实例 */
var app = express()

/* 设置模板引擎 */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())


/* 设置路由 */
var routes = require('./routes')
app.use(routes)


/* 404 */
app.use(function(req, res, next) {
    const ip = Utility.clientIpV4(req)
    var err = new Error(`Not Found`)
    err.status = 404
    next(err)
})

/* 错误处理-开发环境 */
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        logger.warn(err)
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

/* 错误处理-生产环境 */
app.use(function(err, req, res, next) {
    logger.warn(err)
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})



module.exports = app
