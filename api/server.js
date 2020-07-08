
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');
config = require('./DB');

const pacientiRoute = require('./routes/pacienti.route');
const mediciRoute = require('./routes/medici.route');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected');},
  err => { console.log('Can not connect to the database '+ err);}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/pacienti', pacientiRoute);
app.use('/medici', mediciRoute);
const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});
