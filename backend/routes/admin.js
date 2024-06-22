const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Enquiry = require('../models/Enquiry');
const Review = require('../models/Review');
const fetchuser = require('../middleware/fetchuser');
const fetchadmin = require('../middleware/fetchadmin');


// Getting Users details
router.get('/getAllUserDetails',fetchuser,fetchadmin, async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users === 0) {
            return res.status(401).json({ error: "Users not find..." });
        }
        return res.status(200).json(users);
    }
    catch {
        return res.status(401).json({ error: "Fetching User error..." });
    }
})

// Getting Users Enquiry details
router.get('/getAllUserReviews',fetchuser, async (req, res) => {
    try {
        console.log("i am here")
        const reviews = await Review.find();
        if (!reviews || reviews === 0) {
            return res.status(401).json({ error: "Review not find..." });
        }
        return res.status(200).json(reviews);
    }
    catch {
        return res.status(401).json({ error: "Fetching User error..." });
    }
})

// Getting Users Reviews details
router.get('/getAllUserEnquiry',fetchuser, async (req, res) => {
    try {
        console.log("i am here")
        const enquiry = await Enquiry.find();
        if (!enquiry || enquiry === 0) {
            return res.status(401).json({ error: "Enquiry not find..." });
        }
        return res.status(200).json(enquiry);
    }
    catch {
        return res.status(401).json({ error: "Fetching User error..." });
    }
})

module.exports = router;