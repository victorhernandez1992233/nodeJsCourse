const os = require('node:os')

console.log('operating system information')

console.log('----------------------------------------------------------------')


console.log('Nombre del sistema opertivo', os.platform())
console.log('Operating system name', os.release())
console.log('Architecture', os.arch())
console.log('CPUs', os.cpus())
console.log('Free memory', os.freemem()/1024/1024)
console.log('Total Memory', os.totalmem()/1024/1024)
console.log('Uptime', os.uptime()/60)