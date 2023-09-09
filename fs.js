const fs = require("fs"); //modulo fileSystem lee y escribe archivos

// const first = fs.readFileSync("./data/first.txt", "utf-8"); // lee el archivo pasado en el primer parametro y con el segundo se le pasa la codificacion para que pueda ser transcripto a lenguaje humano
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);
// console.log(second.toString());

// const title = "este es el titulo";

// fs.writeFileSync("./data/third.txt", title, {
//     flag: 'a'
// }); // crea una archivo en la ruta pasada en el primer parametro, en el segundo se ubica el contenido que tendra este archivo. Si la sentencia es repetida varias veces el archivo a crear y escribir sera remplazado tantas veces sea ejecutado, el tercer parametro sirve para que en ves de que el archivo sea remplazado, sea escrito con el contenido sentenciado 

// // Node es un entorno de ejecucion que su principal proposito es funcionar de forma asicrona

fs.readFile('./data/third.txt', 'utf-8', (error, data) => {
    // esta funcion se llama un callback porque esta funcion se ejecuta despues que termine la tarea anterior
    if (error) {
        console.log(error)
    }
    console.log(data)
    fs.writeFile('./data/newFile.js', '//este archivo creado desde fs', (err, data) => { // escribe un comentario en el nuevo archivo newFile.js con fs.writeFile()
        console.log(err)
        console.log(data)
    })
}) //forma tipica en la que vamos a estar ejecutando codigo asincrono es decir, ejecuto una funciona y luego de que termine la operacion termino escribiendo mi logica que quiero que se ejecute despues de esta operaciones. es codigo que se va a ir ejecutando despues de tiempo

//eleven loop