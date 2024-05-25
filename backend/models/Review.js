const { Schema, default: mongoose } = require("mongoose");


const ReviewSchema = new Schema({

    review:{
        type: String,
        required: true
    }

})

const Review = mongoose.model('review',ReviewSchema);
module.exports = Review;
