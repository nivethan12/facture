const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/facture.js');
app.use(express.json())



mongoose.connect('mongodb+srv://selvan:selvan@cluster0.e2pfcz0.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('connection à MongoDB Réussie !'))
.catch(()=> console.log('Connexion à MongoDB échouée !'));

app.use('/api/factures', router);


module.exports = app