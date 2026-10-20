const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const corsOptions = {
    origin: 'http://localhost:5173/',
    Credentials: true
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extented:true}))

app.get('/', (req, res) => {
    res.json({message: 'Welcome'})
})

const db = require('./app/models')
db.connex.sync()

require('./app/routes/product.route.js')(app)

const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})