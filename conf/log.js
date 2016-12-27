const fs = require('fs')
const prefix = 'logs'

const server_name = process.env.name || 'test'
const path_error = `${prefix}/error/${server_name}`
const path_work = `${prefix}/work/${server_name}`

/* 判断并创建目录 */
function prepare(logpath) {
  var stuts
	try {

		stuts = fs.statSync(logpath)

    } catch (e) {}

    if (!stuts || !stuts.isDirectory()) {
        console.log(`创建目录: ${logpath}`)
        fs.mkdirSync(logpath)
    }
    return logpath
}


module.exports = {
    log4js: {
        appenders: [{
          type: 'dateFile',
          filename: `${prepare(path_work)}/log`,
          maxLogSize: 1024,
          pattern: "-yyyy-MM-dd",
          category: 'access',
        }, {
          type: 'logLevelFilter',
          level: 'ERROR',
          appender: {
            type: 'dateFile',
            filename: `${prepare(path_error)}/log`,
            maxLogSize: 1024,
            pattern: "-yyyy-MM-dd",
          }
        }, {
          type: 'logLevelFilter',
          level: 'ERROR',
          appender: {
              type: 'smtp',
              recipients: 'a18840822722@qq.com',
              sender: '2856730412@qq.com',
              sendInterval: '30',
              SMTP: {
                host: 'smtp.qq.com',
                secure: true,
                port: 465,
                auth: {
                  user: '2856730412@qq.com',
                  pass: 'hxokjdxzthcjdfaj'
                }
              }
          }
        }],
    },
    logDev: {
      appenders: [{
        type: 'console',
        layout: {
          type: 'pattern',
          pattern: '[%r] [%[%5.5p%]] %m'
        }
      }]
    },
    format: ':method :url HTTP/:http-version :status :response-time[ms]'
}
