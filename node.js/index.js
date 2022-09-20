const http = require('http')  

function greet(req,res){
    res.write("<h1>HI THIS IS NISHANT</h1>")
    res.end()
}
 
http.createServer(greet) .listen(5000);