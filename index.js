const express = require('express')

const app = express()
//code here

app.get('/', function(request, response, next) {
    response.send('<H1>Hello this is my live Server</H1>') 
})
    // insert HTML
app.get('/about', function(request, response, next) {
    response.send('<H1>About Us</H1>') 
})
    // send file
app.get('/contact', function(request, response, next) {
    response.sendFile(__dirname + '/contact.html'); 
})
    // Download
app.get('/file', function(request, response, next) {
    response.download(__dirname + '/notes.txt'); 
})
//keep at the end of the file
app.listen(3000, function(){
    console.log("server is running on port 3000");
})

// in bash node index.html starts server on port 3000;

// in bash nodemon index.js starts live server
