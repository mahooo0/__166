const mongoose = require('mongoose');

const AvtoparkCategorySchema = new mongoose.Schema({
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

module.exports = mongoose.model('AvtoparkCategory', AvtoparkCategorySchema);
