const mongoose = require('mongoose');

const contactCategorySchema = new mongoose.Schema(
    {
        title: {
            az: { type: String, required: true },
            en: { type: String, required: true },
            ru: { type: String, required: true },
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const ContactCategory = mongoose.model(
    'ContactCategory',
    contactCategorySchema
);

module.exports = ContactCategory;
