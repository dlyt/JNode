'use strict'

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'JNode Demo',
    })
  })

router.use('/api', require('./common'))


module.exports = router
