
const promise = {
	0: '请求成功',
	1: '服务器繁忙',
	2: '返回值为空',


	1000: '其他',

}

module.exports = function (error, value) {
	var no = error.toString(error)
	var msg = promise[no] || '未知错误号'
	var json = {
		code: no,
		msg: msg,
		value: value
	}
	return json
}
