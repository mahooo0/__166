const mongoose = require('mongoose');

// Define the translation schema
const translationSchema = new mongoose.Schema(
    {
        key: { type: String, required: true }, // Unique identifier for each entry (e.g., 'key1', 'key2')
        translations: {
            az: { type: String, required: true },
            en: { type: String, required: true },
            ru: { type: String, required: true },
        },
    },
    { timestamps: true }
);

// Export the model
const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
