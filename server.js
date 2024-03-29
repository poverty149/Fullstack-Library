if(process.env.NODE_ENV!=='production'){
   require('dotenv').config()
}
const express=require('express')
const app=express()
const expressLayouts=require('express-ejs-layouts')
const indexRouter=require('./routes/index')


app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(indexRouter)
console.log("hello")
const mongoose=require('mongoose')
mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL)
const db=mongoose.connection
//console.log(process.env.NODE_ENV)
db.on('error',error=>console.error(error))
db.once('open',()=>console.log("mongoose connected"))
app.listen(process.env.PORT||3000)