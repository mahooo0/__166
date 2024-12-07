const mongoose = require('mongoose');

const HomeHeroSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('HomeHeroSchema', HomeHeroSchema);
