// medic.route.js

const express = require('express');
const app = express();
const medicRoutes = express.Router();

// Require Product model in our routes module
let Medic = require('../models/Medic');

// Defined store route
medicRoutes.route('/add').post(function (req, res) {
  let medic = new Medic(req.body);
  medic.save()
    .then(medic => {
      res.status(200).json({'Medic': 'Medic has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
medicRoutes.route('/').get(function (req, res) {
  Medic.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
medicRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Medic.findById(id, function (err, medic){
      res.json(medic);
  });
});

//  Defined update route
medicRoutes.route('/update/:id').post(function (req, res) {
  Medic.findById(req.params.id, function(err, medic) {
    if (!medic)
      res.status(404).send("Record not found");
    else {
      medic.NumeMedic = req.body.NumeMedic;
      medic.PrenumeMedic = req.body.PrenumeMedic;
      medic.Telefon = req.body.Telefon;
      medic.Observatii = req.body.Observatii;

      medic.save().then(medic => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
medicRoutes.route('/delete/:id').get(function (req, res) {
    Medic.findByIdAndRemove({_id: req.params.id}, function(err, medic){
        // console.log('deleted entry with _id',_id);

        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = medicRoutes;
