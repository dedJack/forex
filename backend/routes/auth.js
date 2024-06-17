const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const cookie = require('cookie-parser');
const fetchuser = require('../middleware/fetchuser');  

//Route 1 : To create a user Using POST: 6000/api/auth/createUser
router.post("/register", [
    body('name', 'Enter your name'),
    body('email', 'email must be valid').isEmail(),
    body('password', 'Password must contain 6 characters').isLength(6)
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
            //Hashing will be done here.
            const storeData = await finalUser.save();
            // console.log(storeData);

            res.status(200).json({ status: 200, storeData });
        }
    } catch (error) {
        res.status(500).json({ error: "Registration Error" });
    }
});

// Route 2 : to login using POST: 6000/api/auth/login

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    // console.log(req.body);
    if (!email || !password) {
        res.status(401).json({ error: "Enter your details" });
    }
        try {
            const existUser = await User.findOne({ email: email });
            if (existUser) {
                const comparePass = await bcrypt.compare(password, existUser.password);
                if (!comparePass) {
                    res.status(401).json({ error: "Incorrect Password" });
                } else {

                    //generating Token for existing user
                    let getToken =await existUser.getAuthToken();
                    // console.log(getToken);

                    // cookie generation
                    res.cookie("usercookie",getToken,{
                        expires:new Date(Date.now()+9000000),
                        httpOnly:true
                    });
    
                    const result = {
                        existUser,
                        getToken
                    }
                    res.status(200).json({status:200,result})
                }
            }
        } catch (error) {
            res.status(401).json({ error: "Login error" });
        }
    }

);

//Route 3: fetch all user by GET.

router.get("/getUser",fetchuser,async(req, res) => {
  try {
    let userId = req.userId;
    const user = await User.findById(userId).select("-password");
    res.status(200).json({status : 200, user});
  } catch (error) {
    res.status(401).json({status: 401 ,error});
  }
})

//Route 4: logOut the user
router.get("/logoutUser",fetchuser,async(req,res)=>{
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:'/'});
        req.rootUser.save();

        res.status(200).json({status:200,error});
    } catch (error) {
        res.status(401).json({status: 401, error:"not logged out"});
    }
})

module.exports = router;