// const express = require('express')

// const facturation = require('../models/facturations');
// const app = express();
// const app = require('../app');

// app.use(express.json());

// app.get('/', (req, res, next) => {
//     facturation.find()
//     .then(facturations => res.status(200).json(facturations))
//     .catch(error => res.status(400).json({ error }));
// });

// app.post('/', (req, res, next)=> {
//     delete req.body._id;
//     facturation = new facturation({
//         ...req.body
//     });
//     facturations.save()
//     .then(() => res.status(201).json({ message: 'Facturation enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
//     console.log(req.body);
// });


// app.put('/:id', (req, res, next)=> {
//     facturation.updateOne({_id: req.params.id}, { ...req,body, _id: req.params.id})
//     .then(() => res.status(200).json({ message: 'Facturation modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// });

// app.get('/:id', (req, res, next)=> {
//     facturation.findOne({_id: req.params.id })
//     .then(facturation => res.status(200).json(facturation))
//     .catch(error => res.status(404).json({ error }));
// });

// app.get('/', (req, res, next) => {
//     facturation.find()
//     .then(Facturations => res.status(200).json(Facturations))
//     .catch(error => res.status(400).json({ error }));
// });

// app.post('/', (req, res, next)=> {
//     delete req.body._id;
//     facturation = new Facturation({
//         ...req.body
//     });
//     Facturations.save()
//     .then(() => res.status(201).json({ message: 'Facturation enregistré !'}))
//     .catch(error => res.status(400).json({ error }));
//     console.log(req.body);
// });


// app.put('/:id', (req, res, next)=> {
//     facturation.updateOne({_id: req.params.id}, { ...req,body, _id: req.params.id})
//     .then(() => res.status(200).json({ message: 'Facturation modifié !'}))
//     .catch(error => res.status(400).json({ error }));
// });

// app.get('/:id', (req, res, next)=> {
//     facturation.findOne({_id: req.params.id })
//     .then(facturation => res.status(200).json(facturation))
//     .catch(error => res.status(404).json({ error }));
// });

// app.get('/title/:title', (req, res, next)=> {
//     const encodedtitle = encodeURIComponent(req.params.title);
//     facturation.findOne({title: decodeURIComponent(encodedtitle) })
//     .then(facturation => res.status(200).json(facturation))
//     .catch(error => res.status(404).json({ error }));
// });

// app.delete('/:id', (req, res, next) => {
//     facturation.deleteOne({ _id: req.params.id })
//     .then(() =>res.status(200).json({message: 'Facturation supprimé !'}))
//     .catch(error => res.status(400).json({error}));
// })const express = require('express');

const router = express.Router();

const factureController = require('../controllers/facture');

router.use(express.json());

router.post('/', factureController.createFacture);


router.get('/', factureController.getAllFacture);



router.get('/:id', factureController.getFacturebyId);


router.get('/client/:clientName', factureController.getFacturebyCname);


router.get('/statut/:statut', factureController.getFacturebyStatut);


router.delete('/:id', factureController.deleteFacture);


router.put('/:id', factureController.updateFacture);

module.exports = router;cd