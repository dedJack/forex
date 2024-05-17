
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  
    name: {
        type:String,
        required:true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required:true
    }
});

//Hashing password

UserSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,10);
    next();
})

// creating model
const User = mongoose.model('user', UserSchema);
module.exports = User