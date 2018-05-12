const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db/storage/pumps.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ pumps: [
  {id: 0, name: "Zalivatko 1"},
  {id: 1, name: "Zalivatko 2"},
  {id: 2, name: "Zalivatko 3"},
  {id: 3, name: "Zalivatko 4"}
]})
  .write()

module.exports = db;