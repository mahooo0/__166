const { default: mongoose } = require('mongoose');

const AboutusAdvantegesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        icon: {
            // Добавлено поле для иконки
            type: String,
            required: true,
        },
    },
    { collection: 'AboutHerous' }
);
module.exports = mongoose.model('AboutusAdvanteges', AboutusAdvantegesSchema);
