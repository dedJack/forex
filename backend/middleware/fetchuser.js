const jwt = require('jsonwebtoken');
const jwt_Secret = 'helloIamGoodboy';

const fetchuser =(req, res, next)=>{
    //Get the user from the JWT token and add id to the req object

    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "give valid information"});
    }
    try {
        const data = jwt.verify(token, jwt_Secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "give valid information"});
    }   
}

module.exports = fetchuser;