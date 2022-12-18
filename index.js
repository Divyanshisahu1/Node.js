//task

// 1. Create a folder
// 2. create a file inside a folder
// 3. add data at end of existimg data
// 4. read file not in buffer format
// 5.Delete file and folder
//6 All done in Synchronous function


const fs = require("fs");
fs.mkdirSync("fsModule")
console.log("folder created by fs module")
fs.writeFileSync("fsModule/bio.txt", "hello i have made a text file bu fs module")
console.log("file created by fs Module")
fs.appendFileSync("fsModule/bio.txt", "i want to update existing data")
const buff_data = fs.readFileSync("fsModule/bio.txt")
const original_data = buff_data.toString();
console.log("original data", original_data);
fs.renameSync("fsModule/bio.txt", "fsModule/upt.txt");
console.log("file renamed");
fs.unlinkSync("fsModule/upt.txt")
console.log("file deleted")
fs.rmdirSync("fsModule")
console.log("folder deleted")




