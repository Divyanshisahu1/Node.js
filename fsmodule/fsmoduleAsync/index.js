//task

// 1. Create a folder
// 2. create a file inside a folder
// 3. add data at end of existimg data
// 4. read file not in buffer format
// 5.Delete file and folder
//6 All done in Asynchrously


const fs = require("fs");
fs.mkdir("fsModule", () => {
    console.log("folder created by fs module")
    fs.writeFile("./fsModule/bio.txt", "hello i have made a text file bu fs module", () => {
        console.log("file created by fs Module")
        fs.appendFile("./fsModule/bio.txt", "i want to update existing data", () => {
            console.log("appended data in file")
            console.log(__dirname)
            fs.readFile("./fsModule/bio.txt", "utf-8", (data) => {
               
                console.log("original data", data);
                fs.rename("./fsModule/bio.txt", "./fsModule/upt.txt", () => {
                    console.log("file renamed");
                    fs.unlink("./fsModule/upt.txt", () => {
                        console.log("file deleted")
                        fs.rmdir("fsModule", () => {
                            console.log("folder deleted")
                        })

                    })

                });

            })

        })
    })



})
