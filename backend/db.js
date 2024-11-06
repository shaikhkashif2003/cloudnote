const mongoose = require('mongoose')                //including mongoose module
const mongoURI = "mongodb://localhost:27017/"       // mongo database URL

const connectToMongo = () => {                      // connecting to database
    mongoose.connect(mongoURI).then(                // passing db url and checking connection    
        console.log("Connected to MongoDB")
    )
}

module.exports = connectToMongo;