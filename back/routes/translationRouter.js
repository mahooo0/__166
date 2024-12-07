const express = require('express');
const router = express.Router();
const Translation = require('../models/translates');

// Get all translations
router.get('/', async (req, res) => {
    try {
        const translations = await Translation.find();
        const formattedData = {};
        translations.forEach((item) => {
            formattedData[item.key] = item.translations;
        });
        res.json(formattedData);
    } catch (error) {
        console.error('Error fetching translations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create new translation
router.post('/', async (req, res) => {
    try {
        const newTranslation = new Translation({
            key: req.body.key,
            translations: {
                az: req.body.az,
                en: req.body.en,
                ru: req.body.ru,
            },
        });
        const savedTranslation = await newTranslation.save();
        res.status(201).json(savedTranslation);
    } catch (error) {
        res.status(400).json({ message: 'Error creating translation', error });
    }
});

// Update translation
router.put('/:key', async (req, res) => {
    try {
        const translation = await Translation.findOne({ key: req.params.key });
        if (!translation) {
            return res.status(404).json({ message: 'Translation not found' });
        }

        // if (req.body.key) translation.key = req.body.key;
        if (req.body.az) translation.translations.az = req.body.az;
        if (req.body.en) translation.translations.en = req.body.en;
        if (req.body.ru) translation.translations.ru = req.body.ru;

        await translation.save();
        res.json(translation);
    } catch (error) {
        res.status(400).json({ message: 'Error updating translation', error });
    }
});

// Delete translation
router.delete('/:key', async (req, res) => {
    try {
        const deletedTranslation = await Translation.findOneAndDelete({
            key: req.params.key,
        });
        if (!deletedTranslation) {
            return res.status(404).json({ message: 'Translation not found' });
        }
        res.json({ message: 'Translation deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting translation', error });
    }
});

module.exports = router;
