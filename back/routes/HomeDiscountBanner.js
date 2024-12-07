const express = require('express');
const router = express.Router();
const HomeDiscountBanner = require('../models/HomeDiscoutBunner');
const upload = require('../multer');

// Получить все баннеры
router.get('/', async (req, res) => {
    try {
        const banners = await HomeDiscountBanner.find();
        res.json(banners);
    } catch (error) {
        console.error('Ошибка при получении баннеров:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// Создать новый баннер
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { title, description, date } = req.body;

        if (!title || !description || !date) {
            return res.status(400).json({ message: 'Все поля обязательны' });
        }

        let parsedTitle, parsedDescription;
        try {
            parsedTitle = JSON.parse(title);
            parsedDescription = JSON.parse(description);
        } catch (e) {
            return res
                .status(400)
                .json({ message: 'Неверный формат JSON данных' });
        }

        const imagePath = req.file
            ? `${req.protocol}://${req.get('host')}/${req.file.path}`
            : '';

        const newBanner = new HomeDiscountBanner({
            title: parsedTitle,
            description: parsedDescription,
            image: imagePath,
            date,
        });

        const savedBanner = await newBanner.save();
        res.status(201).json(savedBanner);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ошибка сервера', error });
    }
});

// Обновить баннер
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const banner = await HomeDiscountBanner.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({ message: 'Баннер не найден' });
        }

        const { title, description, date } = req.body;

        let parsedTitle, parsedDescription;
        try {
            if (title) parsedTitle = JSON.parse(title);
            if (description) parsedDescription = JSON.parse(description);
        } catch (e) {
            return res
                .status(400)
                .json({ message: 'Неверный формат JSON данных' });
        }

        if (parsedTitle) banner.title = parsedTitle;
        if (parsedDescription) banner.description = parsedDescription;
        if (date) banner.date = date;

        if (req.file) {
            banner.image = `${req.protocol}://${req.get('host')}/${
                req.file.path
            }`;
        }

        await banner.save();
        res.json(banner);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении баннера',
            error,
        });
    }
});

// Удалить баннер
router.delete('/:id', async (req, res) => {
    try {
        const deletedBanner = await HomeDiscountBanner.findByIdAndDelete(
            req.params.id
        );
        if (!deletedBanner) {
            return res.status(404).json({ message: 'Баннер не найден' });
        }
        res.json({ message: 'Баннер успешно удален' });
    } catch (error) {
        res.status(400).json({ message: 'Ошибка при удалении баннера', error });
    }
});

module.exports = router;
