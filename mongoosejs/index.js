const express = require("express")
const mongoose = require("mongoose")

const app = express();
const port = 3000 ;

const DB = "mongodb://localhost:27017/movies"

mongoose.connect(DB).then( ()=> {
    console.log('connection successful')
}).catch((err)=>{
    console.log(err)
});

const middleware = (req,res,next) =>{
    console.log("Middleware system checking can be used for password checking")
    next(); // when the authentication is successful then we call next to go next 
}


app.get("/",(req,res)=>{
    res.send("This is Home ");
});

app.get("/about" , middleware , (req,res)=>{
    res.send("This is about by get method " );
});

app.post("/about",(req,res)=>{
    res.send("This is about by post method " );
});

app.get("/help",(req,res)=>{
    res.status(404).send("This page is not found ");
});

app.listen(port, ()=>{
    console.log(`App is running on ${port}`)
})