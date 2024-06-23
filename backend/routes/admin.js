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

// DELETING ----------------------------------------------------------------------------------

router.delete('/admin/delete_user/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await User.findByIdAndDelete(userId);
      res.status(200).json({ message: 'User deleted successfully', user });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(401).json({ error: 'Server Error' });
    }
  });

// UPDATING -----------------------------------------------------------------------------------

// router.get('/admin/get_user/:id', async (req, res)=>{
//     try {
//         const userId = req.params.id;
//         const user = await User.findOne(userId);
//     } catch (error) {
//         console.error('Error fetching single user:', error);
//         res.status(401).json({ error: 'Server Error' });
//     }
// })

module.exports = router;