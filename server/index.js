const express = require('express');
const app=express();
const mysql=require('mysql')
const cors=require('cors');
const PORT=3001;

app.use(cors());
app.use(express.json())
const db=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'1234',
    database:'password_manager'
})

app.post('/addpassword',(req,res)=>{
    const{password,service}=req.body;


db.query(
    "INSERT INTO PASSWORDS {password,service} VALUES (?,?)",
    [password,service],
    (err,res)=>{
        if(err){
            console.log(err);
            
        }
        else{
            res.send('Operation successfull')
        }
    }
);
})

app.listen(PORT, ()=>{
    console.log("Server is running on PORT no ==>  ",`${PORT}`);
})