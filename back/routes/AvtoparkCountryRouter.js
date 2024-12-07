const express = require('express');
const router = express.Router();
const AvtoparkCategory = require('../models/Avtoparck_Cantries');

// Get all avtopark countries
router.get('/', async (req, res) => {
    try {
        const categories = await AvtoparkCategory.find();
        res.json(categories);
    } catch (error) {
        console.error('Error fetching avtopark countries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create new avtopark country
router.post('/', async (req, res) => {
    try {
        const newCategory = new AvtoparkCategory({
            name: req.body.name,
        });
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating avtopark country',
            error,
        });
    }
});

// Update avtopark country
router.put('/:id', async (req, res) => {
    try {
        const category = await AvtoparkCategory.findById(req.params.id);
        if (!category) {
            return res
                .status(404)
                .json({ message: 'Avtopark country not found' });
        }

        if (req.body.name) {
            if (req.body.name.az) category.name.az = req.body.name.az;
            if (req.body.name.en) category.name.en = req.body.name.en;
            if (req.body.name.ru) category.name.ru = req.body.name.ru;
        }

        await category.save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            message: 'Error updating avtopark country',
            error,
        });
    }
});

// Delete avtopark country
router.delete('/:id', async (req, res) => {
    try {
        const deletedCategory = await AvtoparkCategory.findByIdAndDelete(
            req.params.id
        );
        if (!deletedCategory) {
            return res
                .status(404)
                .json({ message: 'Avtopark country not found' });
        }
        res.json({ message: 'Avtopark category deleted successfully' });
    } catch (error) {
        res.status(400).json({
            message: 'Error deleting avtopark category',
            error,
        });
    }
});

module.exports = router;
