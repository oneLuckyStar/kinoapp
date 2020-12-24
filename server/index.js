const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const setupApiRoutes = require('./middlewares/api');
const authFilter = require('./middlewares/auth-filter');
const config = require('./config.json');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.MODE = process.env.MODE || 'prod';
let PORT = process.env.PORT || 80;

if (process.env.NODE_ENV=='development') {
	PORT = process.env.SERVERPORT;
}

function onUnhandledRejection(err) {
  console.log('APPLICATION ERROR:', err);
}

function onUnhandledException(err) {
  console.log('FATAL ERROR:', err);
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledRejection);
process.on('uncaughtException', onUnhandledException);

const app = express();

app.set('env', process.env.NODE_ENV);
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());

try {
  setupApiRoutes(app);
} catch (e) {
  console.log(e);
}

if(process.env.NODE_ENV == 'production') {
  const setupAppRoutes = require('./middlewares/production');
  setupAppRoutes(app);
}

const srvr = http.createServer(app);
srvr.listen(PORT, () => {
  console.log(`Server is now running`);
});
srvr.timeout = 1800000;
