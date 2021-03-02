const Sauce = require('../models/sauces');

// creation sauce
exports.creeSauce = (req, res, next) => {
  delete req.body.userId;
    const sauce = new Sauce({ 
        ...req.body
    });
    console.log('body sauce', sauce)

    sauce.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    console.log('la requete sauce', sauce)
};

// on demande une sauce 
exports.uneSauce = (req, res, next) => {
    sauces.findone({ _id: req.params.id })
    .then(sauces => res.status(200).json(sauces).js({ message: 'toutes les sauces' }))
    .catch(error => res.status(404).json({ error }));
};


// on recoit une sauce / image
exports.recoitSauce = (req, res, next) => {
    // on supp id cree par mangodb
    delete req.body._id;
    const sauces = new sauces({
        // racourci pour evite d'ecrire les champs du schema
        ...req.body
    });
    sauces.save()
        .then(() => res.status(201).js({ message: 'la sauce' }))
        .catch(error => res.status(400).json({ error }));
        console.log('recoi sauce ',sauces) 
};
// modifie une sauce
exports.modifSauce = (req, res, next) => {
    sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).js({ message: 'la modifiquation est effectue' }))
        .catch(error => res.status(400).json({ error }));
};

// supprime une sauce
exports.suppSauce = (req, res, next) => {
    sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).js({ message: 'la suppression est effectue' }))
        .catch(error => res.status(400).json({ error }));
};

//like
exports.likeSauce = (req, res, next) => {
    if (jaime = 1) {
        sauce.post({ _id: req.params.id })
            .then(() => res.status(200).js)
            .catch(error => res.status(400).json({ error }))
    } else if (jaime = 0) {
        sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({message: modfife}))
            .catch(error => res.status(400).json({ error }))
    } else if (jaime = -1) {
        sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).js)
            .catch(error => res.status(400).json({ error }))
    };

};
