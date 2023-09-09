const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem())
console.log(os.freemem())

setInterval(() => {
    console.log(os.freemem())
}, 2000)

console.table({
    os: os.platform(),
    version: os.freemem(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
})