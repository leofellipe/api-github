const { axios } = require('./getData')

const getRepository = (owner, repo) => {
  try {
    const resRepository = axios({
      url: `https://api.github.com/repos/${owner}/${repo}`,
      method: 'GET'
    })

    return resRepository
  } catch (error) {
    throw error
  }
}

module.exports = {
  getRepository
}