'use script'

const lightco = require('lightco')
const logger = log4js.getLogger('routes-city')
const handleError = require('../../../lib/error')

const { City } = Models


const postCity = (req, res) => {
  lightco.run(function* ($) {
    try {
      if (req.body.city)
        var city = {city: req.body.city}

      var [err, results] =  yield City.create(city)
      if (err) throw err

      const data = {
        id: results.city_id
      }

      return res.status(201).json(data)

    } catch (e) {
      logger.error(e)
      return handleError(res)
    }
  })
}

const getCity = (req, res) => {
  lightco.run(function* ($) {
    try {
      if (req.params.id)
        var id = req.params.id

      var [err, results] =  yield City.findById(id)
      if (err) throw err

      return res.status(200).json(results)

    } catch (e) {
      logger.error(e)
      return handleError(res)
    }
  })
}



module.exports = {postCity, getCity}
