const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {

    //console.log('Someone visit our web server.')

    const url = req.url
    const method = req.method;
    const str = `您的请求地址是 ${url}, 请求的method类型是 ${method}`

    console.log(str)

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(str)

})

server.listen(80, () => {

    console.log('Server is running at http://127.0.0.1')

})