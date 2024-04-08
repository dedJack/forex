const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/forex"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI ,()=>{
        console.log("connencted to mongoose successfully");
    })
}

module.exports = connectToMongo;