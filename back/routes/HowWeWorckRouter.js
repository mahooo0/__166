const express = require('express');
const router = express.Router();
const HowWeWork = require('../models/HowWeWorck'); // Импортируем модель

// ... существующий код ...

// Обработчик GET
router.get('/', async (req, res) => {
    try {
        const items = await HowWeWork.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Обработчик POST
router.post('/', async (req, res) => {
    const howWeWork = new HowWeWork({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const newItem = await howWeWork.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Обработчик PUT
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await HowWeWork.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Обра��отчик DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await HowWeWork.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Элемент не найден' });
        }
        res.status(200).json({ message: 'Элемент удален' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// ... существующий код ...
module.exports = router;
