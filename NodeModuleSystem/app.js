// var message = 'Hi';
// console.log(message); // will print Hi
// console.log(global.message); // will print undefined


// console.log(module);
// console.log(global.module); // will print undefined

//How to export a module
// const logger = require('./logger');
// logger.log('Hi');

//Module wrapper function
//console.log(__filename);
//console.log(__dirname);

//In built path module
// const path = require('path');
// console.log(path.parse(__dirname));

//In built os module
const os = require('os');
console.log(os.freemem());

//In build fs module

// const fs = require('fs');
// console.log(fs.readdirSync('./')); // Asynchronous version of method.

// console.log(fs.readdir('$', function (err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// }))

//In built Events module

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a listener

// emitter.on('messageLogged', function () {  // addListener method can also be used
//     console.log('Listener called')
// })

// emitter.emit('messageLogged');

// // Oredering of code is important because when emitter emit the event js engine called
// //all the registered listener in a synchronous manner.


//Event Argument
// const Emitter = require('events');
// const emitter = new Emitter();

// emitter.on('messageLogged',function (eventArg){
//     console.log('Listener called ',eventArg);
// })

// emitter.emit('messageLogged',{id: 1, url: 'http://test.com'});

// Extending Event Emitter : code is in separate folder.

// HTTP module very low level

// const http = require('http');
// const server = http.createServer(); // server is an EventEmitter
// server.listen(3000);
// server.on('connection', (socket) => {
//     console.log('New Connection')
// })
// console.log('Listening on server port 3000....')


//HTTP module 

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Home Page');
//         res.end();
//     }
//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify(["java", "javascript", "node"]));
//         res.end();
//     }
// }); // server is an EventEmitter
// server.listen(3000);
// server.on('connection', (socket) => {
//     console.log('New Connection')
// })
// console.log('Listening on server port 3000....');