import express from "express";
import path from "path";


const app = express()
const port = 3000;

const users = [
    { userid: 1, username: 'Mary Bear' },
    { userid: 2, username: 'John Trouble' }
];
//body parsermiddleware
app.use(express.json());

app.use(express.urlencoded({ extended: false })); 

//configure ejs
app.set("view engine", "ejs");
app.set("views", "views");

//Middleware function
const logReq = function(req,res,next){
    console.log("Request received ");
    next();
}
const logNow = function(req,res,next){
    console.log("Request today");
    //  next();
}
app.use(logReq);
app.use(logNow);

//setup static folder
app.use(express.static( "public"))

//routing 
app.get("/",(req,res)=>{
   //res.download ( '/imgs/autumn-stock.webp') 
    res.render("index",{
         title:"HomePage",
         message:" Welcome to the Admin homepage "

    });
     
   
})
console.log("error one")

app.get('/download', (req, res)=>{
    console.log("error two")
    const img1 = path.join(__dirname, 'public/imgs/autumn-stock.webp')
    res.download (img1,(err) =>{
        if(err){
           console.error(err) 
        }
        else{
            console.log('Your file has been downloaded!')
        }
      
    })
    
  });
  console.log("error three")
app.get("/users",(req,res)=>{
    
    res.render("users",{
        title:"UserPage",
        message:"This is the current users list",
        users: users,

   });
} )

app.get("/new-users",(req,res)=>{
    res.render("new-users",{
        title:"New User",
        message:" Hello New User - Please submit your id and name to be added to the system"

   });

} );
app.post("/users", (req, res) => {
    const { userid,username } = req.body;
    //validate userid and username entries 
    if (!userid || !username){
        //add alert
        return res.status(400).send("Please enter UserId and UserName");
    }
    //check if username already exists 
    if (users.some(user => user.userid === parseInt(userid))) {
         //add alert
        return res.status(400).send("User ID already exists");
    }
    //add new user
    users.push({ userid: parseInt(userid), username });
    res.redirect("/users");
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });