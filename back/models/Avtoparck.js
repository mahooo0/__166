const mongoose = require('mongoose');

const AvtoparkSchema = new mongoose.Schema({
    name: {
        az: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        en: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        ru: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
    },
    description: {
        az: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        en: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        ru: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
    },
    trackImage: {
        type: String,
        required: true,
        default: '', // Default value as an empty string
    },
    trackImageInner: {
        type: String,
        required: true,
        default: '', // Default value as an empty string
    },
    dimensions: {
        length: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        width: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        height: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
    },
    capacity: {
        weight: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        volume: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
        pallets: {
            type: String,
            required: true,
            default: '', // Default value as an empty string
        },
    },
    categoryId: {
        type: String,
        required: true,
        default: '', // Default value as an empty string
    },
});

module.exports = mongoose.model('Avtopark', AvtoparkSchema);
