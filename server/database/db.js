const sqlite = require("sqlite3").verbose()
const _key = require("../serverJS/randomKey")

const db = new sqlite.Database("corona.db")
db.serialize(() => {
    db.run(
        " CREATE TABLE IF NOT EXISTS symptoms (device_id text UNIQUE, _id text, symptoms text, datetime number, FOREIGN KEY (device_id) REFERENCES devices(_id))"
    )
    console.log('Database "Symptoms" ready to go!')
    db.run(
        " CREATE TABLE IF NOT EXISTS deviceLocations (device_id text UNIQUE, _id text, latitude number, longitude number, datetime number, FOREIGN KEY (device_id) REFERENCES devices(_id))"
    )
    console.log('Database "DeviceLocations" ready to go!')
})
