const express = require("express");
const server = express();

const config = require('./config/config');
const middleware = require('./middleware/middleware');
const userRoute = require('./router/user');

server.use(middleware);
server.use('/user', userRoute);

server.listen(config.app.port, () => {
	console.log(`Server is listening on ${config.app.port}`);
});
