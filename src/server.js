const express = require('express')
const apiRoutes = require('./routes')
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Request recieved.')
    res.send('Hello there!')
})

app.use('/api', apiRoutes)

app.listen(3000, () => {
    console.log('Server is running!')
})
