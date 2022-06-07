const { getDataUser } = require('../service/getData')

const rpsData = async (req, res) => {
  const { user } = req.body
  try {
    if (!req.body || !req.body.user) {
      res.status(400).json({ success: false, message: 'Por favor, digite o campo obrigatório' })
    }

    const rps = await getDataUser(user)
    const data = rps.data
    res.status(200).json({ data })

  } catch (error) {
    res.status(400).json({ success: false, error: error.message })
  }
}

module.exports = {
  rpsData
}