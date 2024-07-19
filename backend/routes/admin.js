const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Enquiry = require('../models/Enquiry');
const Review = require('../models/Review');
const fetchuser = require('../middleware/fetchuser');
const fetchadmin = require('../middleware/fetchadmin');


// Getting Users details
router.get('/getAllUserDetails', fetchuser, fetchadmin, async (req, res) => {
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
router.get('/getAllUserReviews', fetchuser, async (req, res) => {
    try {
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
router.get('/getAllUserEnquiry', fetchuser, async (req, res) => {
    try {
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

//Deleting User
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

//Deleting Enquiry
router.delete('/admin/delete_enquiry/:id', async (req, res) => {
    try {
        const enquiryId = req.params.id;
        const enquiry = await Enquiry.findById(enquiryId);

        if (!enquiry) {
            return res.status(401).json({ error: "Enquiry not found" });
        }

        await Enquiry.findByIdAndDelete(enquiryId)
        res.status(200).json({ message: "Enquiry deleted successfully" });
    } catch (error) {
        console.error('Error deleting enquiry:', error);
        res.status(500).json({ error: 'Server error' });
    }
})

//Deleting Review
router.delete('/admin/delete_review/:id', async(req,res)=>{
    try {
        const reviewId = req.params.id;
        const review = await Review.findById(reviewId);

        if(!review){
            return res.status(401).json({error: "Review not found"});
        }

        await Review.findByIdAndDelete(reviewId);
        res.status(200).json({message: "Review deleted successfully"})
    } catch (error) {
        console.error('Error deleting Review:', error);
        res.status(500).json({error :"server error"});
    }
})

// UPDATING -----------------------------------------------------------------------------------

//1: getting single user detail for edit.
router.get('/admin/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: 'User successfully fetched', user });
    } catch (error) {
        console.error('Error fetching single user:', error);
        res.status(401).json({ error: 'Server Error' });
    }
})

// Updating the user data 
router.patch('/admin/update_user/:id', async (req, res) => {
    try {
        console.log("i am update")
        const userId = req.params.id;
        const updateUserData = req.body;
        const updatedData = await User.findOneAndUpdate(
            { _id: userId },
            { $set: updateUserData },
            { new: true }
        )

        res.status(200).json({ message: "updated Successfully in the server", updatedData })
    } catch (error) {
        res.status(500).json({ error: "didnt update in the server" })
    }
})

//2. Getting single user Enquiry for view.

router.get('/admin/AdminEnquiry/:id', async (req, res) => {
    try {
        const enquiryId = req.params.id;
        const enquiry = await Enquiry.findById(enquiryId)
        
        if (!enquiry) {
            res.status(404).json({ error: "Enquiry not found" });
        }
        res.status(200).json({ error: "Enquiry found" ,enquiry});        
    } catch (error) {
        console.log("Error fetching single enquiry", error);
        res.status(500).json({ error: "Server error" });
    }
})

module.exports = router;