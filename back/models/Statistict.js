const mongoose = require('mongoose');

const StatisticksSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    },
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
    description: {
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

module.exports = mongoose.model('Statisticks', StatisticksSchema);
