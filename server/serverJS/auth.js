const sqlite = require("sqlite3").verbose()
const { details } = require("../middleware")

const db = new sqlite.Database("./database/corona.db")
db.serialize(() => {
    db.run(
        " CREATE TABLE IF NOT EXISTS devices (_id TEXT, datetime NUMBER, IP TEXT)"
    )

    console.log('Database "Devices" ready to go!')
    // db.all(
    //     "SELECT * from devices where _id=?",
    //     ["2c48b2646af69fb4d6bf77dabdd460548SkWGWtuHtg964YrK7Sm8XarRirqlHKi"],
    //     function(err, rows) {
    //         // if (row) {
    //         console.log("record:", rows)
    //         // }
    //     }
    // )
})

const signup = (token, req, func) => {
    const detail = details(req)
    const t = token
    const datetime = detail.datetime
    const _ip = detail.IP
    db.run(`insert into devices(_id, datetime, IP) values(?, ?, ?)`, [
        t,
        datetime,
        _ip
    ])
    func({ signup: true })
}
const login = ({ token }, func) => {
    db.all(`SELECT * from devices where _id=?`, [token], (err, rows) => {
        if (err) func(false)
        else {
            if (rows.length == 1) func(true)
            else func(false)
        }
    })
}
module.exports = {
    signup,
    login
}
