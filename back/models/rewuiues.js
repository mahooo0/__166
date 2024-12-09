const mongoose = require('mongoose');

const RewiueSchema = new mongoose.Schema(
    {
        img: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { collection: 'Rewiues' }
);

module.exports = mongoose.model('Rewiue', RewiueSchema);
