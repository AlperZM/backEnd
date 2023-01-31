const express = require("express");
const app = express();
 
//middleWare named myLogged
function myLogger(req,res,next) {
  console.log("Logged");
  next();
}
//middleWare named reuestTime
function requestTime(req,res,next) {
  req.requestTime = new Date();
  next();
}


app.use(myLogger);// use myLogged middleWare
app.use(requestTime);
app.get("/",(req,res)=>{
  let responseText = `Basic Express Demo </br>`;
    responseText += `<small>Requested at: ${req.requestTime}</small>`;
    res.send(responseText);
});

app.listen(3000);
