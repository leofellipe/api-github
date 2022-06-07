const express = require('express')
const PORT = 8080
const router = express()
const { rpsData } = require('./src/controllers/data')
const { responseRepository } = require('./src/controllers/reqRepository')

router.use(express.json())

router.get('/', rpsData)

router.get('/teste', responseRepository)

router.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})

module.exports = {
  router
}