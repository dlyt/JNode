
module.exports = (db) => {
	/* 顺序应按照先主表 后从表的顺序排列 */
	return {
		City: require('./city')(db),
	}
}
