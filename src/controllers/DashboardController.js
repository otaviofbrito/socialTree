const Card = require('../model/Cards')
const Profile = require('../model/Profile')

module.exports = {
  async index(req, res) {
    const cards = await Card.get()
    const profile = await Profile.get()

    
    return res.render('index', {
      cards,
      profile
    })
  }
}
