function dateFormat(date) {

    const y = date.getFullYear()
    const m = padZero(date.getMonth() + 1)
    const d = padZero(date.getDate())

    const hh = padZero(date.getHours())
    const mm = padZero(date.getMinutes())
    const ss = padZero(date.getSeconds())

    const dateStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`

    return dateStr

}

function padZero(n) {

    return n > 9 ? n : '0' + n

}

module.exports = {

    dateFormat

}