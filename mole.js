const Server = require('./models/server');
require('dotenv').config();

//Llamando a la clase que inicializa el server
const servere = new Server();

//Ejecucuión del servidor
servere.execute();