
const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'JNode Demo',
    })
  })

router.route('/apidoc')
  .get((req, res) => {
    //res.render('../conf/doc/index.html')
    res.redirect('/index.html')
  })

router.use('/api', require('../app/api/controllers'))


module.exports = router
