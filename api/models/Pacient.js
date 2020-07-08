// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Pacient = new Schema({
  NumarFisa: {
    type: Number
  },
  Medic: {
    type: String
  },
  NumePacient: {
    type: String
  },
  PrenumePacient: {
    type: String
  },
  SerieCI: {
    type: String
  },
  NumarCI: {
    type: String
  },
    CNP: {
    type: Number
  },
  Telefon: {
    type: String
  },
  Observatii: {
    type: String
  }
},{
    collection: 'Pacienti'
});

module.exports = mongoose.model('Pacienti', Pacient);
