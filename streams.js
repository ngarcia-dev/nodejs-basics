// const {writeFile} = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', 'hello world'.repeat(1000000))
// }

// createBigFile()

const {createReadStream} = require('fs')

const stream = createReadStream('./data/bigfile.txt')

// A medida que va leyendo el archivo va disparando el evento .on
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('ya termine de leer el archivo')
})

stream.on('error', (error) => {
    console.log(error)
})

