
const express = require("express");
const app = express()

app.get("/test" , (req,res) =>{
    res.send("hey how are you")
})
app.get("/test/subjects" , (req,res) =>{
    res.send(['math','science','IT'])
})

const add =(a,b) =>{
    return a +b
}
app.listen(8000, () => console.log("listening to port 8000"))
module.exports = {add,app}