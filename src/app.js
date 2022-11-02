
const express = require('express');
const app = express();

const rotaClient = require('../routes/client');
const rotaEmployee = require('../routes/employee');
const rotaReservation = require('../routes/reservation');
const rotaRoom = require('../routes/room');

app.use('/client', rotaClient);
app.use('/employee', rotaEmployee);
app.use('/reservation', rotaReservation);
app.use('/room', rotaRoom);

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(express.json());

module.exports = app;