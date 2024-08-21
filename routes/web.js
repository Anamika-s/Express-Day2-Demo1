const express = require("express")
var myroutes = express.Router();

myroutes.get("/", (req,res)=>
{
    res.send("home page ")
})

myroutes.get("/contact", (req, res)=>
{
    res.send("contact us page")
})
myroutes.get("/about", (req,res)=>
            {
             res.send("about us page")
            })
            
            myroutes.post("/", (req, res)=>
    {
        res.send("Data submitted");
    })
    
    
    // more than 1 callback method
    myroutes.get("/multiple", (req, res, next)=>
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
                
            myroutes.get("/three", [cb1, cb2,cb3]);
    
    // combination of array of callbacks & callback method
    
    myroutes.get("/combine", [cb1,cb2,cb3], (req,res,next)=>
    {
        console.log("all are called")
        next();
    }, (req,res)=>
    {
        res.send("combination of array of callbacks & multpile functions")
    }) 

    

module.exports = myroutes;


