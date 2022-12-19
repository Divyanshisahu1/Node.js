const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello from other side")
})

server.listen(8000, ()=>{
    console.log("server is listening at port 8000")
})