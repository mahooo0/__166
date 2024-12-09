const express = require('express');
const router = express.Router();
const AboutusAdvanteges = require('../models/AboutUsAdvanteges'); // путь к модели
const upload = require('../multer');

// Получить все преимущества
router.get('/', async (req, res) => {
    try {
        const advantages = await AboutusAdvanteges.find();
        res.json(advantages);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// Создать преимущества
router.post('/', upload.single('icon'), async (req, res) => {
    const { title } = req.body;
    const icon = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    if (!title || !icon) {
        return res
            .status(400)
            .json({ message: 'Заголовок и иконка обязательны' });
    }
    try {
        const newAdvantage = new AboutusAdvanteges({ title, icon });
        await newAdvantage.save();
        res.status(201).json(newAdvantage);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// Обновить преимущества по id
router.put('/:id', upload.single('icon'), async (req, res) => {
    const { title } = req.body;
    const icon = req.file
        ? `${req.protocol}://${req.get('host')}/${req.file.path}`
        : req.body.icon;
    try {
        const updatedAdvantage = await AboutusAdvanteges.findById(
            req.params.id
        );
        if (!updatedAdvantage) {
            return res.status(404).json({ message: 'Преимущество не найдено' });
        }
        if (title) updatedAdvantage.title = title;
        if (icon) updatedAdvantage.icon = icon;
        await updatedAdvantage.save();

        res.json(updatedAdvantage);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

// Удалить преимущества по id
router.delete('/:id', async (req, res) => {
    try {
        const deletedAdvantage = await AboutusAdvanteges.findByIdAndDelete(
            req.params.id
        );
        if (!deletedAdvantage) {
            return res.status(404).json({ message: 'Преимущество не найдено' });
        }
        res.json({ message: 'Преимущество удалено' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

module.exports = router;
