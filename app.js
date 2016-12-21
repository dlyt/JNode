'use strict'

var express = require('express')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')
var lightco = require('lightco')
var path = require('path')

var port = process.env.PORT || 3000

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

app.listen(port)
console.log('Listening on ' + port)



module.exports = app
