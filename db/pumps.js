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
  ],
  schedules: [
    { pump_id: 0,
      hours: 19,
      minutes: 15,
      duration: 10,
      frequency: 'daily',
      on: true },
    { pump_id: 1,
      hours: 0,
      minutes: 0,
      duration: 0,
      frequency: 'daily',
      on: false },
    { pump_id: 2,
      hours: 0,
      minutes: 0,
      duration: 0,
      frequency: 'daily',
      on: false },
    { pump_id: 3,
      hours: 0,
      minutes: 0,
      duration: 0,
      frequency: 'daily',
      on: false },
  ]
})
  .write()

module.exports = db;