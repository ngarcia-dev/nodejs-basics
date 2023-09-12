const { readFile } = require("fs/promises");
// Convierte un callback en una promesa sin la necesidad de codificar como en la constante getText en el archivo promise.js
// const { promisify } = require("util");

// const readFilePromise = promisify(readFile)

// async marca que todo el contenido dentro es asycrono
async function read() {
    try{
      // await dice que una ves terminado de ejecutarse procedera a retornar el resultado.
      const result = await readFile("./data/first.txt", "utf-8"); // Yo le digo ejecuta esto () y cuando termines de devolveras el resultado.
      console.log(result);
      const result2 = await readFile("./data/second.txt", "utf-8");
      console.log(result2);
      // throw acaba con la ejecucion del programa y acontinuacion se crea un erorr con new Erro()
      //throw new Error('esto es un error que no se esperaba')
      const result3 = await readFile("./data/third.txt", "utf-8");
      console.log(result3);
      // si ocurre en error dentro de estos condigos async podemos englobarlo dentro de un tricat
    }catch(error){
      console.log(error)
    }
  }
  
  read()