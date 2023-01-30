// html, css, javaScript, images.... files...
// express.static(root, [options])

app.use(express.static("assets")); // now in assets folder it is possible to reach the files...
app.use(express.static("assets")); // you can use multiple time to access this method

const path = require('path'); // The paths you define with the express.
//Static function depend on the directory where you run the node process. 
//Therefore, if you are running express from another directory, it is safer to define the static directory as the full address.
app.use('/static', express.static(path.join(__dirname, 'public')));
