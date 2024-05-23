const jwt = require('jsonwebtoken');
const User = require("../models/User");
const jwt_Secret = 'helloIamGoodboyandveriintelligenr ';

const fetchuser = async(req, res, next)=>{
//     //Get the user from the JWT token and add id to the req object

    const token = req.header('auth-token');
    // console.log(token);
    if(!token){
        res.status(401).send({error : "give valid information"});
    }
    try {
        const data = jwt.verify(token, jwt_Secret);
        const rootUser = await User.findOne({_id:data._id})

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id

        next();
    } catch (error) {
        res.status(401).json({error : "Fetch User error"});
    }   
}

module.exports = fetchuser;