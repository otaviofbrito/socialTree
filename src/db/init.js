const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT
    )`)
    await db.exec(`CREATE TABLE cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      card_label TEXT,
      card_link TEXT
    )`)
    await db.run(`INSERT INTO profile(
      name,
      avatar
    ) VALUES (
      "New profile",
      "https://github.com/otaviofbrito.png"
    )`)
    await db.run(`INSERT INTO cards (
      card_label,
      card_link
    ) VALUES (
      "Welcome!",
      "https://github.com/otaviofbrito"
    )`)
    await db.close()
  }
}

initDb.init()