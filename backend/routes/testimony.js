const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Review = require('../models/Review');

// Route 1: fetch all reviews using GET.
router.get('/fetchAllReview', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews);
})

// Route 2: Add reviews using POST.
router.post('/addReview', [
    body('name', 'name must be atleast 6 characters').isLength(min = 6),
    body('notes', 'notes must contain 6 characters').isLength(min = 6)
], async (req, res) => {

    try {
        const { name, notes,createdAt } = req.body;
        const error = validationResult(req);

        //If there is error then return bad request.
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const review = new Review({name, notes, createdAt });
        const savedNotes = review.save();
        res.status(200).json({status:200, savedNotes})
    } catch (error) {
        res.status(400).json({ errors: "Review not added" })
    }
})

module.exports = router;