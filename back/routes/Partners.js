const express = require('express');
const router = express.Router();
const Partners = require('../models/Partners');
// const Cantry = require('../models/Cantries');
const upload = require('../multer'); // Make sure the path is correct

// Get all Cantries with language handling
router.get('/', async (req, res) => {
    try {
        // Fetch all Country documents from the database
        const partners = await Partners.find();
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving countries', error });
    }
});
// // Get a single Cantry by ID with language handling
router.put('/:id', upload.single('image'), async (req, res) => {
    const file = req.file; // Corrected: Use req.file to access the uploaded image
    const { id } = req.params; // Get the Cantry ID from the URL

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        // Find the Cantry by ID
        const partners = await Partners.findById(id);

        if (!partners) {
            return res.status(404).json({ message: 'Partners not found' });
        }

        // If a new image is provided, update the Image field
        if (file) {
            const imageUrl = `/uploads/${file.filename}`;
            partners.Image = imageUrl; // Update the Image field with the new URL
        }

        // Save the updated partners object
        await partners.save();

        // Return the updated partners object
        res.status(200).json(partners);
    } catch (error) {
        res.status(400).json({ message: 'Error updating partners', error });
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params; // Get the Cantry ID from the URL

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        // Find and delete the Cantry by ID
        const deletedCantry = await Partners.findByIdAndDelete(id);

        if (!deletedCantry) {
            return res.status(404).json({ message: 'Cantry not found' });
        }

        // Return a success response
        res.status(200).json({ message: 'Partner deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting Cantry', error });
    }
});
router.post('/', upload.single('image'), async (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ message: 'Image is required' });
    }

    try {
        // Construct the image URL from the uploaded file
        const imageUrl = `/uploads/${file.filename}`;

        // Create a new Partners object with the image URL
        const newPartner = new Partners({
            Image: imageUrl,
        });

        // Save the new Partners object to the database
        const savedPartner = await newPartner.save();

        // Return the saved Partners object
        res.status(201).json(savedPartner);
    } catch (error) {
        res.status(400).json({ message: 'Error creating partner', error });
    }
});

module.exports = router;
