const mongoose = require('mongoose');

const howWeWorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('HowWeWork', howWeWorkSchema);
