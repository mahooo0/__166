const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
});

// ... existing code ...

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
