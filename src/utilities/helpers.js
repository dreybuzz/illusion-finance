import axios from "axios";

export async function api(url, method = "get", data = {}, headers = {}, config = {}) {
    const request = await axios({
        method: method,
        url: url,
        data: data,
        // withCredentials: true,
        headers: {
            // "Access-Control-Allow-Origin": "true",
            ...headers
        },
        ...config
    })
    return request.data
}


export function currency(num) {
    const p = num.toFixed(2).split(".");
    return "$" + p[0].split("").reverse().reduce(function (acc, num, i, orig) {
        return num + (num != "-" && i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
}


export function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min
}


export function generateRandomColor() {
    let maxVal = 0xffffff
    let randomNumber = Math.random() * maxVal
    randomNumber = Math.floor(randomNumber)
    randomNumber = randomNumber.toString(16)
    let randColor = randomNumber.padStart(6, 0)
    return `#${randColor.toUpperCase()}`
}