const express = require('express')
const apiRoutes = require('./routes')
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Request recieved.')
    res.send('Hello there!')
})

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log('Server is running!')
})
