const Database = require('../db/config')
module.exports = {
  async get() {
    const db = await Database()
    const cards = await db.all(`SELECT * FROM cards`)

    await db.close()
    return cards
      
    
  },
  async delete(id) {
    const db = await Database()

    await db.run(`DELETE FROM cards WHERE id = ${id}`)

    await db.close()
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

    await db.close()
  },
  
}
