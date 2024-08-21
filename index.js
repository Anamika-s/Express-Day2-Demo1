const express = require("express");
const app = express();
const port = 3000;


app.all("/method", (req,res)=>
{
    res.send("METHOD HAS BEEN INVOKED")
})
app.get("/", (req,res)=>
{
 res.send("home page")
})

app.get("/contact", (req,res)=>
    {
     res.send("contact us  page")
    })
app.get("/about", (req,res)=>
        {
         res.send("about us page")
        })
        
app.post("/", (req, res)=>
{
    res.send("Data submitted");
})


// more than 1 callback method
app.get("/multiple", (req, res, next)=>
{ 
    console.log("1st call back")
    // res.send("some logic omes here")
    next()

}, (req,res)=>
{
    console.log("2nd callback")
    res.send("2nd callback")
})


// An array of callbacks

const cb1 = (req,res,next)=>
{
    console.log("1st callback")
    next()
}

const cb2 = (req,res,next)=>
    {
        console.log("2nd callback")
        next()
    }
const cb3 = (req,res,next)=>
        {
            console.log("3rd callback")
            next()
        }
            
app.get("/three", [cb1, cb2,cb3]);

// combination of array of callbacks & callback method

app.get("/combine", [cb1,cb2,cb3], (req,res,next)=>
{
    console.log("all are called")
    next();
}, (req,res)=>
{
    res.send("combination of array of callbacks & multpile functions")
})

// string pattern
app.get("/ab?cd", (req, res)=>
    {res.send("main path")
    
    })
    
    // regular expression
    app.get(/a/, (req,res)=>{
        res.send("it contains a")
    })
    

app.get("*", (req,res)=>
    {
        res.send("page not found")
    })
app.listen(port, (req, res)=>{
    console.log("server started at port no " + port)
})
