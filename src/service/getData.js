const axios = require('axios')

const getDataUser = async (user) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${user}`
    })

    return response
  } catch (error) {
    throw error
  }

}

module.exports = {
  getDataUser,
  axios
}