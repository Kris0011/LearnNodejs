const express = require("express")

const app = express();
const port = 3000 ;


//
let userRouter = express.Router()   

userRouter.use((res , req , next ) => {
    console.log("Users Query Time " + Date());
    next()
    
})

userRouter.get( "/:id" , (res , req,next) =>{
    res.send("User" + res.params.id + "last successful login on " + Date());

})

app.use("/user" , userRouter);   // Router level middleware


userRouter.get('/about/:id' , (req , res)=>{
    res.send("About user id " + req.params.id);
})

userRouter.get('/details/:id' , (req , res)=>{
    res.send("Details of user id " + req.params.id);
})
// Use of Routers





app.use( ( req , res , next )=>{
    if(req.query.pass != 'Kris@123'){
        return res.status(402).send("Password didnt matched !");
    }
    res.send("Password matched")
    next()
})              
// Application level middleware 





app.use('/static',express.static('static'))  // To use static files 

app.set('view engine','pug');  // template engine as pug

app.get("/",(req,res)=>{
    res.send("This is Home ");
});

app.get("/about",(req,res)=>{
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