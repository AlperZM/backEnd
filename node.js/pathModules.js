const http = require("http");
const path = require("path");

console.log("Node.js initials...");

console.log('path.normalize : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
console.log('path.join : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
console.log('path.resolve : ' + path.resolve('main.js'));
console.log('path.extname : ' + path.extname('main.js'));
console.log('path.dirname : ' + path.dirname('https://Learn-Node.alperuzm.repl.co'));
console.log('path.basename : ' + path.basename('https://Learn-Node.alperuzm.repl.co'));
console.log("path.parse : "+path.parse("https://Learn-Node.alperuzm.repl.co"));

console.log("Node.js ends...");
