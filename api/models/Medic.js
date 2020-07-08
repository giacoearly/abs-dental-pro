// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Medic = new Schema({
  NumeMedic: {
    type: String
  },
  PrenumeMedic: {
    type: String
  },
  Telefon: {
    type: String
  },
  Observatii: {
    type: String
  }
},{
    collection: 'Medici'
});

module.exports = mongoose.model('Medici', Medic);
