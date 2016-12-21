'use strict'

const lightco = require('lightco')
const express = require('express')
const router = express.Router()


const { City } = Models

router.route('/city')
  .post((req, res) => {
    lightco.run(function* ($) {
      try {
        if (req.body.city)
          var city = {city: req.body.city}

        var [err, results] =  yield City.create(city)
        if (err) throw err

        return res.json(Conf.promise('0', results.city_id))

      } catch (e) {
        return res.json(Conf.promise('1'))
      }
    })
  })

router.route('/city/:id')
  .get((req, res) => {
    lightco.run(function* ($) {
      try {
        if (req.params.id)
          var id = req.params.id

        var [err, results] =  yield City.findById(id)
        if (err) throw err

        return res.json(Conf.promise('0', results))

      } catch (e) {
        return res.json(Conf.promise('1'))
      }
    })
  })

  .put((req, res) => {
    lightco.run(function* ($) {
      try {
        if (req.params.id)
          var id = req.params.id

        if (req.body.city)
          var city = {city: req.body.city}

        var [err, results] =  yield City.update(city, {where: {city_id: id}})
        if (err) throw err

        return res.json(Conf.promise('0', 'City Updated!'))

      } catch (e) {
        return res.json(Conf.promise('1'))
      }
    })
  })

  .delete((req, res) => {
    lightco.run(function* ($) {
      try {
        if (req.params.id)
          var id = req.params.id

        var [err, results] =  yield City.destroy({where: {city_id: id}})
        if (err) throw err

        return res.json(Conf.promise('0', 'City Deleted!'))

      } catch (e) {
        return res.json(Conf.promise('1'))
      }
    })
  })




module.exports = router
