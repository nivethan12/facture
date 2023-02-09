const mongoose = require('mongoose');

const facturSchema = new mongoose.Schema({
    numéro: { type: String, required: true },
    date: { type: Date, default: Date.now },
    montant: { type: Number, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' }
  });
  

module.exports = mongoose.model('Facturation', facturationSchema)