const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
     const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
     })
     fileStream.on('data', (chunk) => {
        //al momento que vas a responder le vas a pasar la porcion de datos que tengas al momento, y luego cuando se vuelva a ejecutar le vas a pasar la siguiente porcion de datos y asi hasta finalizar.
        fileStream.pipe(res)
     })
     fileStream.on('error', (error) => {
        console.log(error)
     })
})

server.listen(3000)
console.log(`server on port ${3000}`)