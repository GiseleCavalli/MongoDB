
const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/somativomongo");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port);

