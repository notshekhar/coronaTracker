const sqlite = require("sqlite3").verbose()
const _key = require("../serverJS/randomKey")

const db = new sqlite.Database("./database/corona.db")
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

const saveData = (data, func) => {
    let keys = Object.keys(data)
    let symptoms = {}
    keys.forEach(e => {
        if (e != "_id") {
            symptoms[e] = data[e]
        }
    })

    db.all(
        `insert into symptoms(device_id, _id, symptoms, datetime) values(?, ?, ?, ?)`,
        [data._id, _key(), JSON.stringify(symptoms), Date.now()],
        (err, data) => {
            if (err) {
                func(false)
            } else {
                func(true)
            }
        }
    )
}

const saveLocation = (details, func) => {
    let latitude = details.location.latitude
    let longitude = details.location.longitude
    let device_id = details.device_id
    let _id = _key()
    db.all(
        `insert into deviceLocations(device_id, _id, latitude, longitude, datetime) values(?, ?, ?, ?, ?)`,
        [device_id, _id, latitude, longitude, Date.now()],
        (err, data) => {
            if (err) {
                func(false)
            } else {
                func(true)
            }
        }
    )
}

module.exports = {
    saveData,
    saveLocation
}
