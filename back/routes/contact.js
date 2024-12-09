const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Create a new contact
router.post('/', async (req, res) => {
    try {
        const { title, description, contactCategory } = req.body;

        if (!title || !description || !contactCategory) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const contact = new Contact({
            title,
            description,
            contactCategory,
        });

        await contact.save();
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({
            message: 'Error creating contact',
            error: error.message,
        });
    }
});

// Get all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find().populate('contactCategory'); // Populate if necessary
        res.json(contacts);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching contacts',
            error: error.message,
        });
    }
});

// Update a contact by ID
router.put('/:id', async (req, res) => {
    try {
        const { title, description, contactCategory } = req.body;
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        if (title) contact.title = title;
        if (description) contact.description = description;
        if (contactCategory) contact.contactCategory = contactCategory;

        await contact.save();
        res.status(200).json(contact);
    } catch (error) {
        res.status(400).json({
            message: 'Error updating contact',
            error: error.message,
        });
    }
});

// Delete a contact by ID
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.status(200).json({
            message: 'Contact successfully deleted',
            contact,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting contact',
            error: error.message,
        });
    }
});

module.exports = router;
