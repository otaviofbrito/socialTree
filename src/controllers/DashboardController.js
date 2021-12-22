const Card = require('../model/Cards')
const Profile = require('../model/Profile')

module.exports = {
  index(req, res) {
    const cards = Card.get()
    const profile = Profile.get()

    
    return res.render('index', {
      cards,
      profile
    })
  }
}
