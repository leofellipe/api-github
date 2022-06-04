const { getDataUser } = require('../service/getData')

const rpsData = async (req, res) => {
  const { user } = req.body
  try {
    const rps = await getDataUser(user)
    if (!req.body) {
      res.status(400).json({ success: false, message: 'Por favor, digite o campo obrigatório' })
    }

    res.status(200).json(rps)

  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

module.exports = {
  rpsData
}