const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post("/createUser",[
      body('name', 'name must be 3 characters').isLength({ min: 3}),
      body('email', 'email must be valid').isEmail(),
      body('password' , 'Password must contain 5 characters').isLength({ min: 5 }),
  ],async(req, res) => {
    const errors = validationResult(req);

    //checks If error is found then return error with bad message request.
    
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
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          })
          res.json(user);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Bad request");
    }
      
});

module.exports = router;