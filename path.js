const path = require('path') //ayuda a idetificar el sep que se debe utilizar en la app dependiendo si este en un sistema linux o windows

const filePath = path.join('/public', 'dist', '/styles', 'mains.css')

console.log(filePath) // devuelve la ruta completa.
console.log(path.basename(filePath)) // devuelve la base de esa ruta es decir el archivo final
console.log(path.dirname(filePath)) // devuelve la ruta donde se encuentra el archivo de la constante filePath
console.log(path.parse(filePath)) // devuleve la misma informacion pero retornado en un objeto
console.log(path.resolve('dist')) // resuelve desde donde esta parado el parametro que se le esta asignando