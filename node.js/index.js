// basic index
let http = require("http"); // imports http module for server actions
let fs = require("fs"); // imports fileSystem module for files on server

fs.appendFile("input.html",'<input type="text" id="inp" placeholder="Input area"/>', (err)=>{ //add or update file
 if(err){throw err;} else {console.log("savior");}
});

fs.open("gallery.html", "w", (err,file)=>{ // open file if flag "w" exsists write on the file
 if(err){throw err;} else {console.log("savior");}
});

fs.writeFile("h3.html", "<h3>This is h3</h3>", (err)=>{ // write on the file
   if(err){throw err;} else {console.log("savior");}
});

fs.appendFile("input.html", '<input type="color" id="col" placeholder="color picker" />',(err) =>{ //add or update file
   if(err){throw err;} else {console.log("update");}
});

fs.unlink("h3.html", (err)=>{ // delete file
   if(err){throw err;} else {console.log("deleted");}
});

fs.rename("input.html", "colorPicker.html", (err)=>{ /rename the file
   if(err){throw err;} else {console.log("reneamed");}
});

http.createServer((req, res)=>{ // create server
  fs.readFile("demo1.html",(err,data)=>{ // read the file
    res.writeHead(200, {"content-type":"text/html"}); // declare type of file (html)
    res.write(data);
    return res.end();
  });
}).listen(8080);
