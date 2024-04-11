
const path=require('path')
const express = require('express');
const bodyParser=require('body-parser')
//routing is figuring out what page the user wants 
//typically based on a URL (brownser address bar)
//we'll delegate that to routes/index.js

const indexRouter=require('./index.js')

const app=express()

//enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))



//configured app to use the Handlebars template engine and
// work with template files in view directory
app.set('view',path.join(__dirname,'views'))
// "view" are web pages,hbs is handlebars
app.set('view engine','hbs')

app.use('/',indexRouter)

let server =app.listen(3000)