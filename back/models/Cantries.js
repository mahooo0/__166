const mongoose = require('mongoose');

const CantrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    flagIcon: {
        type: String,
        required: true, // Set to `true` if the flag icon is mandatory
    },
});

module.exports = mongoose.model('Cantry', CantrySchema);
