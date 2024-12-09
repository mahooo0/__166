const express = require('express');
const router = express.Router();
const RewiueSchema = require('../models/rewuiues');
const upload = require('../multer');

// Получить все записи
router.get('/', async (req, res) => {
    try {
        const rewuiues = await RewiueSchema.find();
        res.json(rewuiues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Создать новую запись
router.post('/', upload.single('img'), async (req, res) => {
    const imagePath = req.file
        ? `${req.protocol}://${req.get('host')}/${req.file.path}`
        : '';
    const rewuiue = new RewiueSchema({
        username: req.body.username,
        stars: req.body.stars,
        description: req.body.description,
        img: imagePath,
    });

    try {
        const newRewiue = await rewuiue.save();
        res.status(201).json(newRewiue);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Обновить запись по ID
router.put('/:id', upload.single('img'), async (req, res) => {
    try {
        const rewuiue = await RewiueSchema.findById(req.params.id);
        if (!rewuiue) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }

        const { username, stars, description } = req.body;

        // Обновление полей
        if (username) rewuiue.username = username;
        if (stars) rewuiue.stars = stars;
        if (description) rewuiue.description = description;

        // Обновление изображения если загружено новое
        if (req.file) {
            rewuiue.img = `${req.protocol}://${req.get('host')}/${
                req.file.path
            }`;
        }

        await rewuiue.save();
        res.json(rewuiue);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении записи',
            error,
        });
    }
});

// Удалить запись по ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRewiue = await RewiueSchema.findByIdAndDelete(
            req.params.id
        );
        if (!deletedRewiue) {
            return res.status(404).json({ message: 'Запись не найдена' });
        }
        res.json({ message: 'Запись успешно удалена' });
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при удалении записи',
            error,
        });
    }
});

module.exports = router;
