const MD5 = require("./crypto.js")

function _key() {
    const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_"
    const time = MD5(JSON.stringify(Date.now()))
    let randomString = ""
    for (let i = 0; i < 32; i++)
        randomString += v[Math.floor(Math.random() * (v.length - 1))]

    return time + randomString
}

module.exports = _key