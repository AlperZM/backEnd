const http = require("http");
const fs = require("fs");
var os = require("os");

console.log("Node.js initials...");

console.log(`os.tmpdir() => `+os.tmpdir());//
console.log(`os.endiannes => `+os.endianness());
console.log(`os.hostname() => `+os.hostname());
console.log(`os.type() => `+os.type());
console.log(`os.platform() => `+os.platform());
console.log(`os.arch() => `+os.arch());
console.log(`os.release() => `+os.release());
console.log(`os.uptime() => `+os.uptime());
console.log(`os.loadvg() => `+os.loadavg());
console.log(`os.totalmem => `+os.totalmem());
console.log(`os.freemem() => `+os.freemem());
console.log(`os.cpus() => `+os.cpus());
console.log(`os.networkInterfaces() => `+os.networkInterfaces());

console.log("Node.js ends...");
