const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/data"

const connectToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected to mongo successfull");
    })
}

module.exports = connectToMongo;