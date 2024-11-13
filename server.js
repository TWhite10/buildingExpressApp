const express = require("express");
const app = express()
const port = 3000;




//configure ejs
app.set("view engine", "ejs");
app.set("views", "views");
//routing 
app.get("/",(req,res)=>{
   
    res.render('index',{
         
    });
   
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });