const express = require('express');
const mongoose = require('mongoose');
const ServicesCategory = require('../models/ServicesCategory');
// const ServicesCategory = require('../models/ServicesCategory'); // Assuming you have the model in the models folder

const router = express.Router();

// 1. GET all Services Categories
router.get('/', async (req, res) => {
    try {
        const categories = await ServicesCategory.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching categories',
            error: err,
        });
    }
});

// 2. POST a new Service Category
router.post('/', async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    try {
        const newCategory = new ServicesCategory({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({
            message: 'Error creating category',
            error: err,
        });
    }
});
// 3. PUT (Update) a Service Category by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedCategory = await ServicesCategory.findByIdAndUpdate(
            id,
            { name }, // Only update the 'name' field; extend this for additional fields as needed
            { new: true, runValidators: true } // Return the updated document and run validation
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json({
            message: 'Error updating category',
            error: err,
        });
    }
});
// 4. DELETE a Service Category by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCategory = await ServicesCategory.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting category',
            error: err,
        });
    }
});

module.exports = router;
