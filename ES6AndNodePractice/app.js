import express from 'express'
import user_router from "./router/user_router.js";

const app = express()

app.use('/api', user_router)

app.listen(80, () => {
    console.log('Server is running at http://127.0.0.1')
})
