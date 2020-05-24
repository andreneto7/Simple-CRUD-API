const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const AtendimentoSchema = new Schema({
    // Here, we set the names of properties
    name: {
        // The type
        type: String,
        // And if is required or not
        required: true
    }
}, { strict: false });

// Here, we export the model of persons
module.exports = mongoose.model('atendimentos', AtendimentoSchema);
