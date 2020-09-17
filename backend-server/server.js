const express = require("express");
var cors = require('cors');

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

// middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`running at port ${port}`);
});

const users=[
    {name:"tom",password:"tom@123",email:"tom@pic.com"},
    {name:"hary",password:"hary@123",email:"hary@pic.com"},
    {name:"jack",password:"jack@123",email:"jack@pic.com"}
];

app.post("/new_user", (req, res) => {
    const user = req.body;
    if(user){
    users.push(user);
  
      res.status(200).json({
        message: "User created successfully"
      });
    }
    else{
        res.status(401).json({
            message: "Invlaid User Information"
          });
    }
});

app.get("/users",(req,res)=>{

    res.status(200).json(users);

});

app.post("/accounts/validate",(req,res)=>{

  console.log(`New Request Recieved ${req.body.userName} and ${req.body.password}`);
if(req.body.userName=="tom" && req.body.password=="tom@123"){
    res.status(200).json({message:"Valid Credentials"});
}
else{
    res.status(403).json({message:"InValid Credentials"});
}

});


      
    
  