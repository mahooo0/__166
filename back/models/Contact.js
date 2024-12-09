const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    title: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        az: { type: String, required: true },
        en: { type: String, required: true },
        ru: { type: String, required: true },
    },
    contactCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ContactCategory', // Referencing another collection if required
        required: true,
    },
});

module.exports = mongoose.model('Contact', contactSchema);
