const express = require('express');
const router = express.Router();
const Cantry = require('../models/Cantries');
const upload = require('../multer'); // Make sure the path is correct

// Get all Cantries with language handling
router.get('/', async (req, res) => {
    try {
        // Fetch all Country documents from the database
        const countries = await Cantry.find();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving countries', error });
    }
});
// Get a single Cantry by ID with language handling
router.put('/:id', upload.single('flagIcon'), async (req, res) => {
    const { title } = req.body;
    const file = req.file;
    const { id } = req.params; // Get the Cantry ID from the URL

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        // Find the Cantry by ID
        const cantry = await Cantry.findById(id);

        if (!cantry) {
            return res.status(404).json({ message: 'Cantry not found' });
        }

        // If a new flagIcon (image) is provided, update the flagIcon
        if (file) {
            const imageUrl = `/uploads/${file.filename}`;
            cantry.flagIcon = imageUrl; // Update the flagIcon with new image URL
            // console.log(imageUrl);
        }

        // If the title is provided, update it
        if (title) {
            cantry.title = title;
        }

        // Save the updated Cantry object
        await cantry.save();

        // Return the updated Cantry object
        res.status(200).json(cantry);
    } catch (error) {
        res.status(400).json({ message: 'Error updating Cantry', error });
    }
});
router.delete('/:id', async (req, res) => {
    const { id } = req.params; // Get the Cantry ID from the URL

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        // Find and delete the Cantry by ID
        const deletedCantry = await Cantry.findByIdAndDelete(id);

        if (!deletedCantry) {
            return res.status(404).json({ message: 'Cantry not found' });
        }

        // Return a success response
        res.status(200).json({ message: 'Cantry deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting Cantry', error });
    }
});
router.post('/', upload.single('flagIcon'), async (req, res) => {
    const { title } = req.body;
    const file = req.file;

    // Validate required fields
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    if (!file) {
        return res.status(400).json({ message: 'Flag icon image is required' });
    }

    try {
        // Construct the image URL from the uploaded file
        const imageUrl = `/uploads/${file.filename}`;

        // Create a new Cantry object with the title and flag icon URL
        const newCantry = new Cantry({
            title: title,
            flagIcon: imageUrl,
        });

        // Save the new Cantry object to the database
        const savedCantry = await newCantry.save();

        // Return the saved Cantry object
        res.status(201).json(savedCantry);
    } catch (error) {
        res.status(400).json({ message: 'Error creating country', error });
    }
});

module.exports = router;
