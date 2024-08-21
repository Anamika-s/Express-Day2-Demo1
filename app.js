const express = require("express")
var app = express();

var myroutes = require('./routes/web.js');

const port = 3001;

app.use("/api", myroutes);


app.listen(port, (req,res)=>
{
    console.log("server started at port 3001")
})