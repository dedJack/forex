const express = require('express');
const Enquiry = require('../models/Enquiry');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Route 1: Add enquiry to the database 
router.post("/addEnquiry", [
    body('name', "Enter you name").notEmpty(),
    body('contactNumber', "contact number must be 10 letters").isLength(10),
    body('email', "email must be valid").isEmail(),
    body('enquiry').optional()
], async (req, res) => {
    try {
        const { name, contactNumber, email, enquiry } = req.body;
        const error = validationResult(req);

        // if there is error, then return bad request 
        if (!error.isEmpty()) {
            return res.status(401).json({ errors: errors.array()})
        }
        const finalEnquiry = new Enquiry({
            name, contactNumber, email, enquiry
        })
        const saveEnquiry = await finalEnquiry.save();
        res.status(200).json({ status: 200, saveEnquiry })
    } catch (error) {
        res.status(500), express.json({ error: "Enquiry Not added" });
    }
})

module.exports = router;