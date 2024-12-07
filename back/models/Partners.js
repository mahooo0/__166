const mongoose = require('mongoose');

const PartnersSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true, // Set to `true` if the flag icon is mandatory
    },
});

module.exports = mongoose.model('Partners', PartnersSchema);
