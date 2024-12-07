const express = require('express');
const router = express.Router();
const Avtopark = require('../models/Avtoparck');
const upload = require('../multer');

// Получить все автопарки
router.get('/', async (req, res) => {
    try {
        const { categoryId } = req.query;
        let query = {};

        if (categoryId) {
            query.categoryId = categoryId;
        }

        const avtoparks = await Avtopark.find(query).populate('categoryId');
        res.json(avtoparks);

        // res.status(200).json({ success: true, data: avtoparks });
    } catch (error) {
        console.error('Ошибка при получении автопарков:', error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});

// Создать новый автопарк
router.post(
    '/',
    upload.fields([
        { name: 'trackImage', maxCount: 1 },
        { name: 'trackImageInner', maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const { name, description, dimensions, capacity, categoryId } =
                req.body;

            // Validate required fields
            //! joi
            if (
                !name ||
                !description ||
                !dimensions ||
                !capacity ||
                !categoryId
            ) {
                return res
                    .status(400)
                    .json({ message: 'Все поля обязательны' });
            }

            // Parse JSON strings and validate
            let parsedName, parsedDescription, parsedDimensions, parsedCapacity;
            try {
                parsedName = JSON.parse(name);
                parsedDescription = JSON.parse(description);
                parsedDimensions = JSON.parse(dimensions);
                parsedCapacity = JSON.parse(capacity);
            } catch (e) {
                return res
                    .status(400)
                    .json({ message: 'Неверный формат JSON данных' });
            }

            // Process image paths to URLs
            const trackImagePath = req.files.trackImage
                ? `${req.protocol}://${req.get(
                      'host'
                  )}/${req.files.trackImage[0].path.replace(/\\/g, '/')}`
                : '';
            const trackImageInnerPath = req.files.trackImageInner
                ? `${req.protocol}://${req.get(
                      'host'
                  )}/${req.files.trackImageInner[0].path.replace(/\\/g, '/')}`
                : '';

            // Build new document object
            const newAvtopark = new Avtopark({
                name: parsedName,
                description: parsedDescription,
                dimensions: parsedDimensions,
                capacity: parsedCapacity,
                categoryId,
                trackImage: trackImagePath,
                trackImageInner: trackImageInnerPath,
            });

            // Save the document to MongoDB
            const savedAvtopark = await newAvtopark.save();

            res.status(201).json(savedAvtopark);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ошибка сервера', error });
        }
    }
);

// Обновить автопарк
router.put(
    '/:id',
    upload.fields([
        { name: 'trackImage', maxCount: 1 },
        { name: 'trackImageInner', maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const avtopark = await Avtopark.findById(req.params.id);
            if (!avtopark) {
                return res.status(404).json({ message: 'Автопарк не найден' });
            }

            const { name, description, dimensions, capacity, categoryId } =
                req.body;

            // Parse JSON strings and validate
            let parsedName, parsedDescription, parsedDimensions, parsedCapacity;
            try {
                if (name) parsedName = JSON.parse(name);
                if (description) parsedDescription = JSON.parse(description);
                if (dimensions) parsedDimensions = JSON.parse(dimensions);
                if (capacity) parsedCapacity = JSON.parse(capacity);
            } catch (e) {
                return res
                    .status(400)
                    .json({ message: 'Неверный формат JSON данных' });
            }

            // Update fields if provided
            if (parsedName) avtopark.name = parsedName;
            if (parsedDescription) avtopark.description = parsedDescription;
            if (parsedDimensions) avtopark.dimensions = parsedDimensions;
            if (parsedCapacity) avtopark.capacity = parsedCapacity;
            if (categoryId) avtopark.categoryId = categoryId;

            // Process image paths to URLs if new images uploaded
            if (req.files.trackImage) {
                avtopark.trackImage = `${req.protocol}://${req.get('host')}/${
                    req.files.trackImage[0].path
                }`;
            }
            if (req.files.trackImageInner) {
                avtopark.trackImageInner = `${req.protocol}://${req.get(
                    'host'
                )}/${req.files.trackImageInner[0].path}`;
            }

            await avtopark.save();
            res.json(avtopark);
        } catch (error) {
            res.status(400).json({
                message: 'Ошибка при обновлении автопарка',
                error,
            });
        }
    }
);

// Удалить автопарк
router.delete('/:id', async (req, res) => {
    try {
        const deletedAvtopark = await Avtopark.findByIdAndDelete(req.params.id);
        if (!deletedAvtopark) {
            return res.status(404).json({ message: 'Автопарк не найден' });
        }
        res.json({ message: 'Автопарк успешно удален' });
    } catch (error) {
        res.status(400).json({
            message: 'Ошибка при удалении автопарка',
            error,
        });
    }
});

module.exports = router;
