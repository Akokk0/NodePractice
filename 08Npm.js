const dayjs = require('dayjs')
const fs = require('fs')
const path = require('path')

const dt = dayjs().format('YYYY-MM-DD HH:mm:ss')

console.log(dt)

const pathStr = path.join(__dirname, './File/test.txt')
fs.readFile(pathStr, (err, data) => {

    if (err) return console.log(err.message)
    console.log(data)

})