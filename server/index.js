const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log('db connected'))
  .catch(e => {
    console.log('Error, exiting', e);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./app/routes/qrcodes.routes.js')(app);

app.listen(process.env.PORT, () => {
  console.log(`Server luistert op poort ${process.env.PORT}`);
});
