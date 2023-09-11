// console.log('first')

// setTimeout(() => {
//     console.log('second')
// }, 0)

// console.log('third')

// lo que hace node para manejar distintas tareas al mismo tiempo es que mientras una terea se va realizando lo que hace node es hacer que la tarea se mantenga ejecutando, y mientras se va haciendo esa tarea salta a la siguiente 

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end()
    }

    if (req.url === '/about') {

        //  blocking code --> bloquea hilo de ejecucion de node
        // for (let i = 0; i < 100000; i++) {
        //     console.log(Math.random() * i)
        // }

        return res.end('About page')
    }

    res.end('Not Found')
})

server.listen(3000)
console.log(`Server on port 3000`)