const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const AtendimentoSchema = new Schema({}, { strict: false });

// Here, we export the model of persons
module.exports = mongoose.model('atendimentos', AtendimentoSchema);
