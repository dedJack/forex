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
    body('notes', 'Review must be atleat 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { notes } = req.body;
        const error = validationResult(req);

        //If there is error then return bad request.
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const review = new Review({ notes });
        const savedNotes = review.save();
        res.json(savedNotes)
    } catch (error) {
        res.status(400).json({ errors: "Review not added" })
    }


})

//Route 3 : Delete reviews by using DELETE
router.delete('/deleteReview', async (req, res) => {
    // console.log(req.params.id)
    try {
        // Find the note to be delete and delete it
        let note = await Review.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Not Found")
        }
        else {
            note = await Review.findByIdAndDelete(req.params.id)
            res.json({ "Success": "Note has been deleted", note: note });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;