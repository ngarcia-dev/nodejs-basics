const http = require("http");

const server = http.createServer((request, response) => { //definimos la constante server para usar la funcion listen() e inicializar el servidor en el puerto 3000 con la siguiente linea de codigo server.listen(3000)
  //crea un web server

  console.log(request.url);

  if (request.url === "/") {
    response.write("Welcome to the hotel california");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end(); // retorna esta respuesta al cliente
  }

  response.write(`<h1> Not Found </h1> <p> This page is not available </p> <a href='/'> Return to main page </a>`); //es lo que enseña el servidor a la hora de visitar el sitio
  response.end();
});

server.listen(3000); //indica el puerto en el que esta escuchando la app

console.log("Servidor escuchando en el puerto 3000");

// Para levantar un servidor de prueba con node se puede ejecutar el siguiente comando: npx serve -s path_public/