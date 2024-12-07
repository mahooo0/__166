const express = require('express');
const router = express.Router();
const AboutusHeroSchema = require('../models/Aboutus');
const upload = require('../multer');
// Получить все записи
router.get('/', async (req, res) => {
    try {
        const heroes = await AboutusHeroSchema.find();
        res.json(heroes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Создать новую запись
router.post('/', upload.single('image'), async (req, res) => {
    const imagePath = req.file
        ? `${req.protocol}://${req.get('host')}/${req.file.path}`
        : '';
    const hero = new AboutusHeroSchema({
        title: req.body.title,
        description: req.body.description,
        img: imagePath,
    });

    try {
        const newHero = await hero.save();
        res.status(201).json(imagePath);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ... другие маршруты (например, обновление, удаление) ...
//

module.exports = router;
