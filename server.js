const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4300

const app = express();

app.use(express.static(__dirname + '/public')) // tell node to look for static files in the public directory

app.get('/',  (req, res) => {
    res.render('index.ejs')
})







app.listen(PORT, (error) => {
    if (error) {
        console.log('error in connection')
    }
    else {
        console.log(`The server is running on port ${PORT} `)
    }
})