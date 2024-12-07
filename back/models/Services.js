const mongoose = require('mongoose');

const ServicesSchema = new mongoose.Schema({
    title: {
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
    desc: {
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
    desc_short: {
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
    icon: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Services', ServicesSchema);
