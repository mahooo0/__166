const express = require('express');
const router = express.Router();
const AboutusHeroSchema = require('../models/Aboutus');
const upload = require('../multer');
// Получить все записи
router.get('/', async (req, res) => {
    try {
        const heroes = await AboutusHeroSchema.find();
        res.json(heroes[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Создать новую запись
router.put('/', upload.single('image'), async (req, res) => {
    const imagePath = req.file
        ? `${req.protocol}://${req.get('host')}/${req.file.path}`
        : '';
    const hero = await AboutusHeroSchema.findById('675475df97551e1b7f783cc4');

    if (!hero) {
        return res.status(404).json({ message: 'Герой не найден' });
    }

    hero.title = req.body.title;
    hero.description = req.body.description;
    hero.img = imagePath;

    try {
        const updatedHero = await hero.save();
        res.json(updatedHero);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ... другие маршруты (например, обновление, удаление) ...
//

module.exports = router;
