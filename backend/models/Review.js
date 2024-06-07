const { Schema, default: mongoose } = require("mongoose");


const ReviewSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    notes:{
        type: String,
        required: true
    }

})

const Review = mongoose.model('review',ReviewSchema);
module.exports = Review;
