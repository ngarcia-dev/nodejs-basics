console.log(module)

const myWebAddress = 'www.google.com'
const myNumber = 20
const myArray = [1,2,3,4]
const user = {
    name: 'nahu',
    age: 25
}

const group = {
    myWebAddress,
    myNumber,
    myArray,
    user
}

module.exports = group // Exportamos una constante, para que distintos archivos puedan llavar a myModule y asi utilizar los scripts de este archivo.

module.exports.user = user
module.exports.myNumber = myNumber
module.exports.myArray = myArray
module.exports.myWebAddress = myWebAddress

console.log(module)