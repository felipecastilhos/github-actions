const express = require('express')
const coronaHate = require('./soundMaker')

const app  = express()

var listener = app.listen(3000, () => {
    console.log('Listening on port ' + listener.address().port);
})

app.get('/', (req, res) => { 
    res.send(coronaHate())
})
