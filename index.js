const express = require('express')

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

pp.get('/second', function (req, res) {
    res.send('My Second Page!')
})

app.listen(3000, function () {
    console.log('I am awake!')
})