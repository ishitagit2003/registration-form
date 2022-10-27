const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homeRouter');
//address de rh....url

const port = process.env.port || 8080;
//automatically empty port le lega jha website host krenge aur na mile toh 8080 run krega

const app = express();

//database connection
mongoose.connect('mongodb://localhost:27017/studentsdata',(err)=>{
    if(err) throw err;
    console.log("Connected to MongoDB!!!");
})
const db = mongoose.connection;


db.on("error",()=>{console.log("error in connection");})
db.once('open',()=>{console.log("Connected");})

//view engine html css file
app.set('view engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/',homeRouter)
//.../ represents index router 
app.listen(port)
// port 8080 pe run krte
