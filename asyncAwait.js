const { readFile } = require("fs");

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

// async marca que todo el contenido dentro es asycrono
async function read() {
  try{
    // await dice que una ves terminado de ejecutarse procedera a retornar el resultado.
    const result = await getText("./data/first.txt"); // Yo le digo ejecuta esto () y cuando termines de devolveras el resultado.
    console.log(result);
    const result2 = await getText("./data/second.txt");
    console.log(result2);
    // throw acaba con la ejecucion del programa y acontinuacion se crea un erorr con new Erro()
    //throw new Error('esto es un error que no se esperaba')
    const result3 = await getText("./data/third.txt");
    console.log(result3);
    // si ocurre en error dentro de estos condigos async podemos englobarlo dentro de un tricat
  }catch(error){
    console.log(error)
  }
}

read()