const mongoose = require('mongoose');

const serviceAdvantegesSchema = new mongoose.Schema({
    serviceId: { type: String, required: true }, // идентификатор услуги
    advantages: [{ type: String, required: true }],
    title: { type: String, required: true }, // заголовок
    description: { type: String, required: true }, // описание
});

module.exports = mongoose.model('ServiceAdvanteges', serviceAdvantegesSchema);
