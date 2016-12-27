'use script'

var utils = {}

/* x-real-ip 由nginx转发时添加 */
utils.clientIpV4 = function(req) {
    const ip = req.headers['x-real-ip'] ||
               req.connection.remoteAddress ||
               req.socket.remoteAddress
	return ip.split(':').pop()
}

module.exports = utils
