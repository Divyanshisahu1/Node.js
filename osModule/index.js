const os = require("os");
console.log(os.arch());
console.log(os.hostname())
console.log(os.platform())
console.log(os.cpus())
console.log(os.type())
console.log(os.tmpdir())

let freeMemory = os.freemem()
console.log(freeMemory)// in byte
console.log(freeMemory/1024/1024/1024) // in GB

let totalStorage = os.totalmem()
console.log(totalStorage/1024/1024/1024)
