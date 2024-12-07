const mongoose = require('mongoose');

const AboutusHeroSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
    { collection: 'AboutHerous' }
);

module.exports = mongoose.model('AboutusHero', AboutusHeroSchema);
