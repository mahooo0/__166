const express = require('express');
const router = express.Router();
const StatisticksTitle = require('../models/StatistictTtle'); // Import your model

// POST - Create a new Statisticks Title
// router.post('/', async (req, res) => {
//     const { title, description } = req.body;

//     try {
//         // Create a new Statisticks Title instance
//         const newStatisticksTitle = new StatisticksTitle({
//             title,
//             description,
//         });

//         // Save the new Statisticks Title to the database
//         await newStatisticksTitle.save();
//         res.status(201).json(newStatisticksTitle);
//     } catch (error) {
//         res.status(400).json({
//             message: 'Error creating Statisticks Title',
//             error,
//         });
//     }
// });

// PUT - Update an existing Statisticks Title by ID
router.put('/', async (req, res) => {
    // const { id } = req.params;
    const { title, description } = req.body;

    try {
        // Find the Statisticks Title by ID and update it
        const updatedStatisticksTitle =
            await StatisticksTitle.findByIdAndUpdate(
                '67378e240f6a254ed6edbda6',
                { title, description },
                { new: true } // Return the updated document
            );

        if (!updatedStatisticksTitle) {
            return res
                .status(404)
                .json({ message: 'Statisticks Title not found' });
        }

        res.status(200).json(updatedStatisticksTitle);
    } catch (error) {
        res.status(400).json({
            message: 'Error updating Statisticks Title',
            error,
        });
    }
});

// GET - Get a Statisticks Title by ID
router.get('/', async (req, res) => {
    // const { id } = req.params;

    try {
        // Find the Statisticks Title by ID
        const statisticksTitle = await StatisticksTitle.findById(
            '67378e240f6a254ed6edbda6'
        );

        if (!statisticksTitle) {
            return res
                .status(404)
                .json({ message: 'Statisticks Title not found' });
        }

        res.status(200).json(statisticksTitle);
    } catch (error) {
        res.status(400).json({
            message: 'Error fetching Statisticks Title',
            error,
        });
    }
});

// You can export the router for use in your app.js or server.js
module.exports = router;
