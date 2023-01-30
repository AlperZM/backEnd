const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=> res.send("This is respond for get method"));

app.use(express.static("assets"));


// for 404 errors
app.use((req, res, next) => {
  res.status(404).send('Sorry, I cannot fibd the page!');
});
app.listen(port, ()=>console.log("connected to ${port}"));
