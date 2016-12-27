
const express = require('express')
const router = express.Router()

/**
 * @apiDefine Error
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "error": "系统繁忙，请稍后再试。"
 *     }
 */
router.use('/city', require('./city'))


module.exports = router
