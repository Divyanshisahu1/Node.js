const http = require("http")
const server =http.createServer((req, res)=>{
    if(req.url==="/"){
        res.write("hello from other side");
    }
    else if(req.url==="/about"){
        res.write("hello from about page")
    }
    else if(req.url==="/contact"){
        res.write("hello from contact page")
    } else{
        res.writeHead(404, "content-type:text/html")
        res.write("<h1>404 Page Not found</h1>")
    }
    res.end()
})

server.listen(8000, ()=>{
    console.log("server is listening at port 8000")
})