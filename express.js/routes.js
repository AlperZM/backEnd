const express = require("express"); // imports express
const app = express(); // use express for shorthand;
const port = 3000; 

// simple route system
app.get("/", (req, res) => res.send("app responds 'get' methods"));
app.post("/", (req, res) => res.send("app responds 'post' methods"));
app.put("/user", (req, res) => res.send("app responds '/user' a 'put' methods"));
app.delete("/user", (req, res) => res.send("app responds '/user' a 'delete' methods"));

app.listen(port, ()=>console.log("connected to ${port}"));// MUST BE USED END OF THE SCRİPT
