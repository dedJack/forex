const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const jwt_Secret = 'helloIamGoodboy';

//Route 1 : To create a user Using POST: 6000/api/auth/createUser
router.post("/createUser",[
  body('name', 'name must be 3 characters').isLength({ min: 3}),
  body('email', 'email must be valid').isEmail(),
  body('password' , 'Password must contain 5 characters').isLength({ min: 5 }),
  ],async(req, res) => {
    const errors = validationResult(req);

    //checks If error is found, then return error with bad message request.
    
      if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
    //Here the function waits and find for the email in the daatbase body if it exists then  return error with bad message request.
        let user = await User.findOne({email : req.body.email});
        if(user){
          return res.status(400).json({error : "Email already exist..."});
        }
        //If email doesnt exist int he database then it first create a user and then move ahead.
        salt = await bcrypt.genSalt(10)
        secPassword = await bcrypt.hash(req.body.password, salt)
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
          });
          const data ={
            user : {
              id : user.id
            }
          }
          const authToken = jwt.sign(data ,jwt_Secret);
          res.json(authToken);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Bad request");
    }      
});

// Route 2 : to login using POST: 6000/api/auth/loginUser

router.post("/loginUser",[
    body('email', 'email must be valid').isEmail(),
    body('password' , 'Password must contain 5 characters').isLength({ min: 5 }),
    ],async(req, res) => {
    const errors = validationResult(req);

    //checks If error is found, then return error with bad message request.
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const {email , password} = req.body;
    try {
      let user = await User.findOne({email});
      //check if the usre exist or not
      if(!user){
        return res.status(400).json({error : "Email doesn't exist..."});
      }
      //check if the compared password is right or not.
      const comparePassword = await bcrypt.compare(password, user.password);
      if(!comparePassword){
        return res.status(400).json({error : "Incorrect password.."});
      }
      const data ={
        user : {
          id : user.id
        }
      }
      const authToken = jwt.sign(data ,jwt_Secret);
      res.json(authToken);
      
    } catch (error) {
      Console.error(error.message);
      res.status(500).send("Bad request");
    }
});

//Route 3: get the loggedin user by using POST: 6000/api/auth/getUser

router.post("/getUser",fetchuser,async(req, res) => {

  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Bad request");
  }
})

module.exports = router;
