const express =require("express");//imports express;
const app = express(); // define app -> express
app.use("/static" ,express.static("public")); // define "public" file

console.log("-------> express starts"); //control starts here

app.get("/",(req,res)=>{
  res.send("Hello Express");
}).listen(8080);

console.log("------> express ends"); // control ends here

//404 hata kodu
app.use((req, res, next) => {
  res.status(404).send('Üzgünüm, dosyayı bulamadım!')
});
