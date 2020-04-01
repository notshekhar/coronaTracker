import fetch from "node-fetch"

const ajax = async (url, data) => {
    if (data) {
        let d = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        let e = await d.json()
        return e
    } else {
        let d = await fetch(url)
        let e = await d.json()
        return e
    }
}

export default ajax
