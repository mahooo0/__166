const mongoose = require('mongoose');

const ServicesCategorySchema = new mongoose.Schema({
    name: {
        az: {
            type: String,
            required: true,
        },
        en: {
            type: String,
            required: true,
        },
        ru: {
            type: String,
            required: true,
        },
    },
});

module.exports = mongoose.model('ServicesCategory', ServicesCategorySchema);
