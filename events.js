const EventEmitter = require('events')

// Con la palabra clave new en JavaScript sirve para crear objetos
const customEmitter = new EventEmitter()

// Es muy importante primero crear el evento y luego ejecutar los emits

// esto es similar al addEventListener
customEmitter.on('response', (data, dataSecond) => {
    // 'response' no importa realmente el valor que le pongas simplemente es un nombre
    console.log('received')
    console.log(data)
    console.log(dataSecond)
})

customEmitter.emit('response', 'Hello World!!!', 'Second Hello World!!!')