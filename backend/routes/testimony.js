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
    body('email', 'email must be valid').isEmail(),
    body('notes', 'notes must contain 6 characters').isLength(6)
], async (req, res) => {

    try {
        const { email, notes } = req.body;
        const error = validationResult(req);

        //If there is error then return bad request.
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const review = new Review({email, notes });
        const savedNotes = review.save();
        res.json(savedNotes)
    } catch (error) {
        res.status(400).json({ errors: "Review not added" })
    }
})

module.exports = router;