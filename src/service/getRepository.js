const { axios } = require('./getUser')

const getRepository = (owner, repo) => {
  try {
    const resRepository = axios({
      method: 'GET',
      url: `https://api.github.com/repos/${owner}/${repo}`
    })

    return resRepository
  } catch (error) {
    throw error
  }
}

module.exports = {
  getRepository
}