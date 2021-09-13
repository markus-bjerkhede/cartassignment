const express = require('express')
const apiRoutes = require('./routes')
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;
// const corsOptions = {
//     origin: 'http://localhost:8080',
//     credentials: true,
//     optionSuccessStatus: 200,
// }
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5500'
}))
app.use(express.json())

app.get('/', (req, res) => {
    console.log('Request recieved.')
    res.send('Hello there!')
})

app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log('Server is running!')
})
