const { Schema, default: mongoose } = require("mongoose");


const ReviewSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date().getTime()
    }

})

const Review = mongoose.model('review',ReviewSchema);
module.exports = Review;
