const express = require('express')
const PORT = 8080
const router = express()
const { userDataGitHub } = require('./src/controllers/user')
const { dataRepositoryGitHub } = require('./src/controllers/repository')

router.use(express.json())

router.get('/user', userDataGitHub)

router.get('/repository', dataRepositoryGitHub)

router.listen(PORT, () => {
  console.log(`server hosted on route http://localhost:${PORT}`)
})