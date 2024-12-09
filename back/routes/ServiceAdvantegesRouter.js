const express = require('express');
const router = express.Router();
const Service = require('../models/ServicesAdvbanteges'); // путь к модели

// Получить преимущества услуги по serviceId
router.get('/:serviceId', async (req, res) => {
    // ... существующий код ...
    try {
        const services = await Service.find({
            serviceId: req.params.serviceId,
        });
        if (!services) {
            return res.status(404).json({ message: 'Услуга не найдена' });
        }
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
    // ... существующий код ...
});

// Создать преимущества услуги
router.post('/', async (req, res) => {
    // ... существующий код ...
    const { serviceId, advantages, title, description } = req.body;
    if (!serviceId || !advantages || !title || !description) {
        return res.status(400).json({ message: 'Все поля обязательны' });
    }
    const newServiceAdvantage = new Service({
        serviceId,
        advantages,
        title,
        description,
    });
    try {
        await newServiceAdvantage.save();
        res.status(201).json(newServiceAdvantage);
    } catch (error) {
        res.status(500).json({
            message: 'Ошибка при создании преимущества услуги',
        });
    }
    // ... существующий код ...
});

// Обновить преимущества услуги по serviceId
router.put('/:id', async (req, res) => {
    // ... существующий код ...
    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedService) {
            return res.status(404).json({ message: 'Услуга не найдена' });
        }
        res.json(updatedService);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
    // ... существующий код ...
});

// Удалить преимущества услуги по serviceId
router.delete('/:id', async (req, res) => {
    // ... существующий код ...
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(404).json({ message: 'Услуга не найдена' });
        }
        res.json({ message: 'Услуга удалена' });
    } catch (error) {
        res.status(500).json({ message: 'Ошибка сервера' });
    }
    // ... существующий код ...
});

module.exports = router;
