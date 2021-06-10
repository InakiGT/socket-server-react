const Server = require('./models/server');
require('dotenv').config();

//Llamando a la clase que inicializa el server
const server = new Server();

//Ejecucuión del servidor
server.execute();