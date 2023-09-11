const { readFile } = require("fs");
const { result } = require("lodash");
const colors = require('colors')

//Quiero que se ejecute este codigo despues de un cierto tiempo
const path = "./data/third.txt";

const getText = (pathFile) => {
  //devuelve una nueva promesa
  return new Promise(function (resolve, reject) {
    //se puede colocar codigo que esta escrito con callbacks y transformarlo en promises
    /*resolve => indica que este codigo ya se resolvio*/
    /*reject => idica que nos respondienton mal o ocurrio un error en la respuest*/
    // new Promise va a esperar que se ejecute un codigo despues de cierto tiepo
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        //esto indica que si ocurre un error se va a ejecutar el reject pasandole el error
        reject(err);
      }
      //En el caso que la condición anterior no se cumpla va a ejecutar el resolve pasandole el data
      resolve(data);
    });
  });
};

// Nos permite ejecutar codigo asincrono de cualquier forma
getText(path)
  // la funcion .then Adjunta callbacks para la resolución y/o rechazo de la Promesa.
  .then((result) => console.log(result.yellow))
  .then(() => getText("./data/first.txt"))
  .then((result) => console.log(result.red))
  // la funcion .catch Adjunta una devolución de llamada solo para el rechazo de la Promesa.
  .catch((error) => console.log(error));
