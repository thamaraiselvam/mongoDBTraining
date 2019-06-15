const server = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./../config/config');

mongoose.set('useCreateIndex', true);

server.use(bodyParser.json());

server.use('/', (req, res, next) => {
	const {protocal, host, port, name} = config.app.database;
	mongoose.connect(`${protocal}${host}:${port}/${name}`, {useNewUrlParser: true});
	next();
})


module.exports = server;