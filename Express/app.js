const express = require("express")

const app = express();
const port = 3000 ;

app.get("/",(req,res)=>{
    res.send("This is Home");
});

app.get("/about",(req,res)=>{
    res.send("This is about by get method");
});
app.post("/about",(req,res)=>{
    res.send("This is about by post method");
});

app.get("/help",(req,res)=>{
    res.status(404).send("This page is not found");
});

app.listen(port, ()=>{
    console.log(`App is running on ${port}`)
})