const Facture = require ('../modele/facture');

exports.createFacture = (req, res, next) => {
    const facture = new Facture({
        ...req.body
    })
    facture.save()
    .then(() => res.status(201).json({message: 'Facture créer !'}))
    .catch(error => res.status(400).json({error}));
};

exports.getAllFacture = (req, res, next) => {
    Facture.find()
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({error}));
}

exports.getFacturebyId = (req, res, next) => {
    Facture.findOne({_id: req.params.id})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({error}));
};


exports.getFacturebyCname = (req, res, next) => {
    const encodedPname = encodeURIComponent(req.params.clientName);
    Facture.find({clientName: decodeURIComponent(encodedPname)})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({error}));
};

exports.getFacturebyStatut = (req, res, next) => {
    const encodedPname = encodeURIComponent(req.params.statut);
    Facture.find({statut: decodeURIComponent(encodedPname)})
    .then(facture => res.status(200).json(facture))
    .catch(error => res.status(404).json({error}));
};

exports.deleteFacture = (req, res, next) => {
    Facture.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({message: 'Facture annuler !'}))
    .catch(error => res.status(400).json({error}));
};



exports.updateFacture = (req, res, next) => {
    Facture.updateOne({ _id: req.params.id },
        {
            ...req.body
        })

    .then(() => res.status(200).json({message: 'Facture corriger !'}))
    .catch(error => res.status(400).json({error}));
};