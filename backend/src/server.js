const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-xrils.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true} );

//Para usar configuração que está em outro arquivo no express
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
