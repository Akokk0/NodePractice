const express = require('express')
const router = require('./11Test')

const app = express()

app.use(router)

app.listen(80, () => {

    console.log('Express Server is running at http://127.0.0.1')

})