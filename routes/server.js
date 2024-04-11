
const path=require('path')
const express = require('express');



const indexRouter=require('./routes/index.js')

const app=express()

app.use('/',indexRouter)




app.set('view',path.join(__dirname,'views'))

app.set('view engine','hbs')

app.use('/',indexRouter)

let server =app.listen(3000)