const express = require('express');
const mongoose = require('mongoose');
const Services = require('../models/Services'); // Replace with the correct path to your model
const upload = require('../multer');

const router = express.Router();

// Create a new service (POST)
router.post('/', upload.single('icon'), async (req, res) => {
    const file = req.file;

    if (!file) {
        console.log('nofile');

        return res.status(400).json({ message: 'No icon file provided' });
    }

    try {
        // Construct the image URL from the uploaded file
        const iconUrl = `/uploads/${file.filename}`;

        // Create a new service object with form data and the icon URL
        const newService = new Services({
            title: {
                az: req.body.titleAz,
                en: req.body.titleEn,
                ru: req.body.titleRu,
            },
            desc: {
                az: req.body.descAz,
                en: req.body.descEn,
                ru: req.body.descRu,
            },
            desc_short: {
                az: req.body.descShortAz,
                en: req.body.descShortEn,
                ru: req.body.descShortRu,
            },
            icon: iconUrl,
            category_id: req.body.category_id,
        });

        // Save the new service object to the database
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (error) {
        console.log(' is file');

        res.status(400).json({ message: 'Error creating service', error });
    }
});

// Get all services (GET)
router.get('/', async (req, res) => {
    try {
        const services = await Services.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single service by ID (GET)
// router.get('/services/:id', async (req, res) => {
//     try {
//         const service = await Services.findById(req.params.id);
//         if (!service) {
//             return res.status(404).json({ error: 'Service not found' });
//         }
//         res.status(200).json(service);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// Update a service by ID (PUT)
router.put('/:id', upload.single('icon'), async (req, res) => {
    const file = req.file;
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'ID is required' });
    }

    try {
        const service = await Services.findById(id);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        // Update fields if provided in request body
        if (req.body.titleAz) service.title.az = req.body.titleAz;
        if (req.body.titleEn) service.title.en = req.body.titleEn;
        if (req.body.titleRu) service.title.ru = req.body.titleRu;

        if (req.body.descAz) service.desc.az = req.body.descAz;
        if (req.body.descEn) service.desc.en = req.body.descEn;
        if (req.body.descRu) service.desc.ru = req.body.descRu;

        if (req.body.descShortAz) service.desc_short.az = req.body.descShortAz;
        if (req.body.descShortEn) service.desc_short.en = req.body.descShortEn;
        if (req.body.descShortRu) service.desc_short.ru = req.body.descShortRu;

        if (req.body.category_id) service.category_id = req.body.category_id;

        // Update icon if new file uploaded
        if (file) {
            const imageUrl = `/uploads/${file.filename}`;
            service.icon = imageUrl;
        }

        // Save the updated service
        await service.save();

        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ message: 'Error updating service', error });
    }
});

// Delete a service by ID (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedService = await Services.findByIdAndDelete(req.params.id);
        if (!deletedService) {
            return res.status(404).json({ error: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
