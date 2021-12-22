const Database = require('../db/config')
module.exports = {
  async get() {
    const db = await Database()

    const data = await db.get(`SELECT * FROM profile`)

    await db.close()

    return data
  
  },
  async update(newData){
    const db = await Database()

    db.run(`UPDATE profile SET
    name = "${newData.name}",
    avatar = "${newData.avatar}"`)


    await db.close()
  }
}
