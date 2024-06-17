
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt_Secret = 'helloIamGoodboyandveriintelligenr ';

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
    },

    isAdmin:{
        type: Boolean,
        default: false
    },

    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

//Hashing password
UserSchema.pre("save", async function(next){

    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

//generating Auth token
UserSchema.methods.getAuthToken = async function(){
    try {
        let generatedToken = jwt.sign({_id : this._id},jwt_Secret,{expiresIn: "1d"});

        this.tokens = this.tokens.concat({token:generatedToken});
        await this.save();
        return generatedToken;
    } catch (error) {
        res.status(400).json(error)
    }
}


// creating model
const User = mongoose.model('user', UserSchema);
module.exports = User