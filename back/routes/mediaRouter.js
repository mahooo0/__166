const express = require('express');
const router = express.Router();
const Media = require('../models/Media');
const upload = require('../multer');

// Получить все медиа
router.get('/', async (req, res) => {
    try {
        const media = await Media.find();
        res.json(media);
    } catch (error) {
        console.error('Ошибка при получении медиа:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// Создать новую медиа запись
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, description, date } = req.body;

        // Проверка обязательных полей
        if (!title || !description || !date) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }

        // Парсинг JSON строк
        let parsedTitle, parsedDescription;
        try {
            parsedTitle = JSON.parse(title);
            parsedDescription = JSON.parse(description);
        } catch (e) {
            return res
                .status(400)
                .json({ message: 'Неверный формат JSON данных' });
        }

        // Обработка пути изображения в URL
        const imagePath = req.file
            ? `${req.protocol}://${req.get('host')}/${req.file.path}`
            : '';

        // Создание нового документа
        const newMedia = new Media({
            title: parsedTitle,
            description: parsedDescription,
            image: imagePath,
            date,
        });

        const savedMedia = await newMedia.save();
        res.status(201).json(savedMedia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
});

// Обновить медиа запись
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Медиа запись не найдена' });
        }

        const { title, description, date } = req.body;

        // Парсинг JSON строк
        let parsedTitle, parsedDescription;
        try {
            if (title) parsedTitle = JSON.parse(title);
            if (description) parsedDescription = JSON.parse(description);
        } catch (e) {
            return res
                .status(400)
                .json({ message: 'Неверный формат JSON данных' });
        }

        // Обновление полей
        if (parsedTitle) media.title = parsedTitle;
        if (parsedDescription) media.description = parsedDescription;
        if (date) media.date = date;

        // Обновление изображения если загружено новое
        if (req.file) {
            media.image = `${req.protocol}://${req.get('host')}/${
                req.file.path
            }`;
        }

        await media.save();
        res.json(media);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении медиа записи',
            error,
        });
    }
});

// Удалить медиа запись
router.delete('/:id', async (req, res) => {
    try {
        const deletedMedia = await Media.findByIdAndDelete(req.params.id);
        if (!deletedMedia) {
            return res.status(404).json({ message: 'Медиа запись не найдена' });
        }
        res.json({ message: 'Медиа запись успешно удалена' });
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при удалении медиа записи',
            error,
        });
    }
});

module.exports = router;
