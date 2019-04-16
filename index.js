const express = require('express')

const app = express()

const body_parser = require('body-parser')

app.use(body_parser.json())


app.get('/', function (request, respond, next) {
    respond.send('<H1>Hello this is my live Server</H1>');
})
// insert HTML
app.get('/about', function (request, respond, next) {
    respond.send('<H1>About Us</H1>');

})
// respond .html page renders
app.get('/contact', function (request, respond, next) {
    respond.sendFile(__dirname + '/contact.html');
})
// Download
app.get('/file', function (request, respond, next) {
    respond.download(__dirname + '/notes.txt');
})

            // old way
// app.get('/channel/:id', function (request, respond, next) {
//     let channel = channels.find(function (c) {
//         return c.id == request.params.id;
//     });
//     respond.send(channel);
// })
// app.post('/channels', function (request, respond, next) {
//     console.log(request.body);
//     respond(request.body);
// })

app.get('/channel', require('./controllers/channel-get'))

app.get('/channel/:name', require('./controllers/channel-get'))

app.post('/channels', require('./controllers/channel-create'))

// app.get('/messages/:id', function (request, respond, next) {
//     let message = messages.content.find(function (c) {
//         return c.id == request.params.id;
//     });
//     respond.send(message);
// })
// app.get('/messages', function (request, respond, next) {
//     respond.send(messages);
// })
     

//keep at the end of the file
app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on port 3000");
})


// in bash node index.html starts server on port 5050;

// in bash nodemon index.js starts live server
