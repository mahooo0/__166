const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
    {
        serviceCategoryId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to another collection (e.g., Service Category)
            ref: 'ServiceCategory', // Name of the referenced collection (optional, for population)
            required: true,
        },
        images: {
            type: [String], // Array of strings to store image URLs or paths
            required: true,
            validate: {
                validator: function (arr) {
                    return arr.length > 0; // Ensure the array is not empty
                },
                message: 'The images array must contain at least one image.',
            },
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
