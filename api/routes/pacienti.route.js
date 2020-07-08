// pacient.route.js

const express = require('express');
const app = express();
const pacientRoutes = express.Router();

// Require Product model in our routes module
let Pacient = require('../models/Pacient');

// Defined store route
pacientRoutes.route('/add').post(function (req, res) {
  let pacient = new Pacient(req.body);
  pacient.save()
    .then(pacient => {
      res.status(200).json({'Pacient': 'Pacient has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
pacientRoutes.route('/').get(function (req, res) {
  Pacient.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
pacientRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Pacient.findById(id, function (err, pacient){
      res.json(pacient);
  });
});

//  Defined update route
pacientRoutes.route('/update/:id').post(function (req, res) {
  Pacient.findById(req.params.id, function(err, pacient) {
    if (!pacient)
      res.status(404).send("Record not found");
    else {
      pacient.NumarFisa = req.body.NumarFisa;
      pacient.Medic = req.body.Medic;
      pacient.NumePacient = req.body.NumePacient;
      pacient.PrenumePacient = req.body.PrenumePacient;
      pacient.SerieCI = req.body.SerieCI;
      pacient.NumarCI = req.body.NumarCI;
      pacient.CNP = req.body.CNP;
      pacient.Telefon = req.body.Telefon;
      pacient.Observatii = req.body.Observatii;

      pacient.save().then(pacient => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
pacientRoutes.route('/delete/:id').get(function (req, res) {
    Pacient.findByIdAndRemove({_id: req.params.id}, function(err, pacient){
        // console.log('deleted entry with _id',_id);

        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = pacientRoutes;
