const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
    title: {
        az: {
            type: String,
            required: true,
            default: '',
        },
        en: {
            type: String,
            required: true,
            default: '',
        },
        ru: {
            type: String,
            required: true,
            default: '',
        },
    },
    description: {
        az: {
            type: String,
            required: true,
            default: '',
        },
        en: {
            type: String,
            required: true,
            default: '',
        },
        ru: {
            type: String,
            required: true,
            default: '',
        },
    },
    image: {
        type: String,
        required: true,
        default: '',
    },
    date: {
        type: String,
        required: true,
        default: '',
    },
});

module.exports = mongoose.model('Media', MediaSchema);
