const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwt_Secret = 'helloIamGoodboy';

//Route 1 : To create a user Using POST: 6000/api/auth/createUser
router.post("/register", [
    body('name', 'Enter your name'),
    body('email', 'email must be valid').isEmail(),
    body('password', 'Password must contain 5 characters').isLength(6)
], async (req, res) => {
    // console.log(req.body);
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json({ error: "fill all the details" });
    }
    try {
        const preUser = await User.findOne({ email });
        if (preUser) {
            res.status(400).json({ error: "Email already exist" });
        }
        else {
            const finalUser = new User({
                name, email, password
            })
            //HAsing will be done here.
            const storeData = await finalUser.save();
            console.log(storeData);

        }
    } catch (error) {
        res.status(500).json({ errors: "Bad request" });
    }


});

// Route 2 : to login using POST: 6000/api/auth/loginUser

// router.post("/loginUser",[
//     body('email', 'email must be valid').isEmail(),
//     body('password' , 'Password must contain 5 characters').exists()
//     ],async(req, res) => {
// //     const errors = validationResult(req);

// //     //checks If error is found, then return error with bad message request.
//     if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//     }

//     const {email , password} = req.body;
//     try {
//       let user = await User.findOne({email});
//       //check if the usre exist or not
//       if(!user){
//         return res.status(400).json({error : "Email doesn't exist..."});
//       }
// //       //check if the compared password is right or not.
//       const comparePassword = await bcrypt.compare(password, user.password);
//       if(!comparePassword){
//         return res.status(400).json({error : "Incorrect password.."});
//       }
//       const data ={
//         user : {
//           id : user.id
//         }
//       }
//       const authToken = jwt.sign(data ,jwt_Secret);
//       res.json(authToken);

//     } catch (error) {
//       Console.error(error.message);
//       res.status(500).send("Bad request");
//     }
// });

// //Route 3: get the loggedin user by using POST: 6000/api/auth/getUser

// router.post("/getUser",fetchuser,async(req, res) => {

//   try {
//     userId = req.user.id;
//     const user = await User.findById(userId).select("-password");
//     res.send(user);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Bad request");
//   }
// })

module.exports = router;