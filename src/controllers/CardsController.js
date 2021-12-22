let Card = require('../model/Cards')

module.exports = {
  async saveCard(req, res){
    await Card.create({
      label: req.body.card_label,
      link: req.body.card_link
    })
    return res.redirect('/')
  },
  deleteCard(req, res){
    const cardId = req.params.id
    Card.delete(cardId)
    return res.redirect('/')
  }
}