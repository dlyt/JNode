'use script'

const handleError =  (res, message, code) => {
  message = '系统繁忙，请稍后再试' || message
  res.status(code || 500).json({'error': message})
}

module.exports = handleError
