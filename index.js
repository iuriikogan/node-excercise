const express = require('express')

const app = express()

app.listen(3000, function(){
    console.log("server is running on port 3000");
})

// in bash node index.html starts server on port 3000;