const express = require('express')

const app = express()

const body_parser = require('body-parser')
//code here

app.use(body_parser.json())

// testJSON
var channels = [{
        id: 1,
        name: 'General'
    }, {
        id: 2,
        name: 'Random'
    }, {
        id: 3,
        name: 'Private'
    },
    {
        id: 2,
        name: 'fun'
    }];

var messages = [{
    id: 1,
    name: 'General',
    content: [{
        name: 'message1',
        name: 'message2',
        name: 'message3'
    }]
}, {
    id: 2,
    name: 'random',
    content: {
       
    }
}];

app.get('/', function (request, response, next) {
    response.send('<H1>Hello this is my live Server</H1>');
})
// insert HTML
app.get('/about', function (request, response, next) {
    response.send('<H1>About Us</H1>');

})
// response .html page renders
app.get('/contact', function (request, response, next) {
    response.sendFile(__dirname + '/contact.html');
})
// Download
app.get('/file', function (request, response, next) {
    response.download(__dirname + '/notes.txt');
})


app.get('/channel/:id', function (request, response, next) {
    let channel = channels.find(function (c) {
        return c.id == request.params.id;
    });
    response.send(channel);
})
app.post('/channels', function (request, response, next) {
    console.log(request.body);
})

app.get('/messages/:id', function (request, response, next) {
    let message = messages.content.find(function (c) {
        return c.id == request.params.id;
    });
    response.send(message);
})
app.get('/messages', function (request, response, next) {
    response.send(messages);
})







//keep at the end of the file
app.listen(3000, function () {
    console.log("server is running on port 3000");
})

// in bash node index.html starts server on port 3000;

// in bash nodemon index.js starts live server
