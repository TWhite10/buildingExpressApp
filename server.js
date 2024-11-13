const express = require("express");
const app = express()
const port = 3000;




//configure ejs
app.set("view engine", "ejs");
app.set("views", "views");
//routing 
app.get("/",(req,res)=>{
   
    res.render("index",{
         title:"HomePage",
         message:" hello hello hello "

    });
   
})
app.get("/users",(req,res)=>{
    res.render("users",{
        title:"UserPage",
        message:" hello hello user user user "

   });
} )

app.get("/users/new",(req,res)=>{
    res.render("/users/new",{
        title:"HomePage",
        message:" hello hello new new new "

   });

} )

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });