const express = require('express');
const app = express();
   
 let addTwoNumber = (a,b)=> a+b;

 let multiTwoNumber = (a,b)=> a*b;

 app.get('add' , (req, res)=>{
    let {a,b}=req.query();
    let sum = addTwoNumber(5,6);
    console.log(sum);
    res.status(200).send(sum.toStering());
    // no point to write after respose code 
 })

app.listen(8080 , () =>{
   console.log("listening");
})