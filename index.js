const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cb = require('./controllers/controller.js');


app.use(bodyParser.json())

    app.post('/api/messages', bc.create)
    app.get('/api/messages', bc.read)
    app.put('/api/messages/:id', bc.update)
    app.delete('/api/messages/:id', bc.delete)



app.listen(3000, ()=>{
    console.log("Listening on port 3000")})