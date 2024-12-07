const express = require('express');
const router = express.Router();
const Statisticks = require('../models/Statistict'); // Import your model

// POST - Create a new Statisticks entry
router.post('/', async (req, res) => {
    const { value, title, description } = req.body;

    try {
        // Create a new Statisticks instance
        const newStatisticks = new Statisticks({
            value,
            title,
            description,
        });

        // Save the new Statisticks entry to the database
        await newStatisticks.save();
        res.status(201).json(newStatisticks);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating Statisticks entry',
            error,
        });
    }
});

// PUT - Update an existing Statisticks entry by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { value, title, description } = req.body;

    try {
        // Find and update the Statisticks entry by ID
        const updatedStatisticks = await Statisticks.findByIdAndUpdate(
            id,
            { value, title, description },
            { new: true } // Return the updated document
        );

        if (!updatedStatisticks) {
            return res
                .status(404)
                .json({ message: 'Statisticks entry not found' });
        }

        res.status(200).json(updatedStatisticks);
    } catch (error) {
        res.status(400).json({
            message: 'Error updating Statisticks entry',
            error,
        });
    }
});

// DELETE - Delete a Statisticks entry by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the Statisticks entry by ID
        const deletedStatisticks = await Statisticks.findByIdAndDelete(id);

        if (!deletedStatisticks) {
            return res
                .status(404)
                .json({ message: 'Statisticks entry not found' });
        }

        res.status(200).json({
            message: 'Statisticks entry deleted successfully',
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting Statisticks entry',
            error,
        });
    }
});

// GET - Get all Statisticks entries
router.get('/', async (req, res) => {
    try {
        // Fetch all Statisticks entries from the database
        const statisticks = await Statisticks.find();
        res.status(200).json(statisticks);
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching Statisticks entries',
            error,
        });
    }
});

// GET - Get a Statisticks entry by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find the Statisticks entry by ID
        const statisticks = await Statisticks.findById(id);

        if (!statisticks) {
            return res
                .status(404)
                .json({ message: 'Statisticks entry not found' });
        }

        res.status(200).json(statisticks);
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching Statisticks entry',
            error,
        });
    }
});

// You can export the router for use in your app.js or server.js
module.exports = router;
