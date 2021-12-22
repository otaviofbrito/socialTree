const Database = require('../db/config')
module.exports = {
  async get() {
    const db = await Database()
    const cards = await db.all(`SELECT * FROM cards`)

    await db.close()
    return cards
  },
  async create(newCard) {
    const db = await Database()
    
    await db.run(`INSERT INTO cards (
      card_label,
      card_link
    ) VALUES (
      "${newCard.label}",
      "${newCard.link}"
    )`)
  },
  delete(id) {
    
  }
}
