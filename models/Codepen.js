const mongoose = require('mongoose');

const codepenSchema = new mongoose.Schema({
    codepen_title: String,
    codepen_description: String,
    codepen_url: String,
    date: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Codepen', codepenSchema);