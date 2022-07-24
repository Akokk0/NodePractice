const express = require('express')
const server = express()

server.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback
    console.log(funcName)
    const data = {name: 'zs', age: 22}
    const dataStr = `${funcName}(${JSON.stringify(data)})`
    res.send(dataStr)
})

server.listen(80, () => {
    console.log('Express Server is running at http://127.0.0.1')
})