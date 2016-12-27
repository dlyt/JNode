'use strict'

const express = require('express')
const helper = require('../helper')
const router = express.Router()



 /**
  * @api {post} /city 录入城市的相关信息
  * @apiName 添加城市
  * @apiGroup City
  *
  * @apiParam {String} city 城市名称.
  *
  * @apiSuccess {Number} id 城市ID.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "id": 26,
  *     }
  * @apiError error 添加城市失败.
  *
  * @apiUse Error
  */
router.route('/')
  .post((req, res) => {
    helper.city.postCity(req, res)
  })

router.route('/:id')
  .get((req, res) => {
    helper.city.getCity(req, res)
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
