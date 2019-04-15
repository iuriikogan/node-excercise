const express = require('express')

const app = express()
//code here

app.get('/', function(request, response, next) {
    response.send('<H1>Hello this is my live Server</H1>') 
})
app.get('/about.html', function(request, response, next) {
    response.send('<H1>ABOUT US</H1>') 
})
//keep at the end of the file
app.listen(3000, function(){
    console.log("server is running on port 3000");
})

// in bash node index.html starts server on port 3000;

// in bash nodemon index.js starts live server
