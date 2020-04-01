const fetch = require("node-fetch")

const getLiveData = func => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const URL =
        "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-27-2020.csv"
    fetch(URL)
        .then(e => e.text())
        .then(csv => {
            const data = csv.split("\n")
            const json = data.map(e => e.split(","))
            json.splice(0, 1)
            func(json)
        })
}

getLiveData(data => {
    console.log(data.length)
})
