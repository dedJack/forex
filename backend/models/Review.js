const { Schema, default: mongoose } = require("mongoose");


const ReviewSchema = new Schema({

    email:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    }

})

const Review = mongoose.model('review',ReviewSchema);
module.exports = Review;
