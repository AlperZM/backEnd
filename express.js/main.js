//express basic server starts...
const express = require("express");
const app = express();


console.log(`Express.js initials... 
------`);
app.get("/",(req,res)=>{
  res.send("Hello Node");
});
const server = app.listen(8081, ()=>{
  const host = server.address().adress;
  const port = server.address().port;
  console.log("Express server works....");
});


console.log(`---------
Express.js ends...`);
