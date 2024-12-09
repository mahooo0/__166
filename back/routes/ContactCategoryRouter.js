const express = require('express');
const ContactCategory = require('../models/ContactCategory');
const router = express.Router();

// Create a new contact category
router.post('/', async (req, res) => {
    try {
        const { title } = req.body;

        if (!title || !title.az || !title.en || !title.ru) {
            return res.status(400).json({
                message: 'Поле title с языками az, en, ru обязательно',
            });
        }

        const newCategory = new ContactCategory({ title });
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при создании категории контактов',
            error: error.message,
        });
    }
});

// Get all contact categories
router.get('/', async (req, res) => {
    try {
        const categories = await ContactCategory.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка сервера при получении категорий',
            error: error.message,
        });
    }
});

// Get a specific contact category by ID

// Update a contact category by ID
router.put('/:id', async (req, res) => {
    try {
        const { title } = req.body;

        const category = await ContactCategory.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Категория не найдена' });
        }

        if (title) {
            if (title.az) category.title.az = title.az;
            if (title.en) category.title.en = title.en;
            if (title.ru) category.title.ru = title.ru;
        }

        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении категории',
            error: error.message,
        });
    }
});

// Delete a contact category by ID
router.delete('/:id', async (req, res) => {
    try {
        const category = await ContactCategory.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Категория не найдена' });
        }

        res.status(200).json({
            message: 'Категория успешно удалена',
            category,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка при удалении категории',
            error: error.message,
        });
    }
});

module.exports = router;
