const express = require('express');
const Gallery = require('../models/Galereya');
const upload = require('../multer');
const router = express.Router();

// Add a new gallery item
router.post('/', upload.array('images', 10), async (req, res) => {
    try {
        const images = req.files.map(
            (file) => `${req.protocol}://${req.get('host')}/${file.path}`
        );
        const galleryItem = new Gallery({
            serviceCategoryId: req.body.serviceCategoryId,
            images,
        });

        await galleryItem.save();
        res.status(201).json(galleryItem);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при создании галереи',
            error: error.message,
        });
    }
});

// Get all gallery items
router.get('/', async (req, res) => {
    try {
        const galleryItems = await Gallery.find(); // Adjust fields as needed
        res.status(200).json(galleryItems);
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка сервера',
            error: error.message,
        });
    }
});

// Update a gallery item by ID
router.put('/:id', upload.array('images', 10), async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Галерея не найдена' });
        }

        if (req.body.serviceCategoryId) {
            galleryItem.serviceCategoryId = req.body.serviceCategoryId;
        }

        if (req.files.length > 0) {
            const images = req.files.map(
                (file) => `${req.protocol}://${req.get('host')}/${file.path}`
            );
            galleryItem.images = images;
        }

        await galleryItem.save();
        res.status(200).json(galleryItem);
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при обновлении галереи',
            error: error.message,
        });
    }
});

// Delete a gallery item by ID
router.delete('/:id', async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
        if (!galleryItem) {
            return res.status(404).json({ message: 'Галерея не найдена' });
        }

        res.status(200).json({
            message: 'Галерея успешно удалена',
            galleryItem,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка при удалении галереи',
            error: error.message,
        });
    }
});

module.exports = router;
