const express = require("express");
const app = express()
const port = 3000;


const navbar = 
` <nav style = ' background-image: linear-gradient(180deg,#c4b6fd, #93acfc); padding:25px;' >
   <a href='/' style = 'color: black;font-weight: bold; text-decoration:none; padding:5px'>Home</a>  
   <a href='/random-number'   style = 'color: black; font-weight: bold;text-decoration:none; padding:5px'>Random Number</a> 
   <a href='/time' style = 'color: black; font-weight: bold; text-decoration:none; padding:5px'>Time</a> 

</nav>`

;

//configure ejs
app.set("view engine", "ejs");
app.set("views", "views");
//routing 
app.get("/",(req,res)=>{
   
    res.render('index',{
         navbar:navbar
    });
   
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });