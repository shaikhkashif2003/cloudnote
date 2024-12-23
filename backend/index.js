const connectToMongo = require('./db');     //including db file 
const express = require('express')          //including express js
connectToMongo();

const app = express()
const port = 3000

//Middle ware
app.use(express.json()) //for json data

// Including Available Routes
app.use('/api/auth', require('./routes/auth'))      
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
