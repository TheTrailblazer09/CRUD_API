const express= require('express');
const bodyParser = require('body-parser');

const app=express();
const connect = require('./database').connect;
const dweetRoutes= require('./routes/route');
app.use(bodyParser.urlencoded({extended:false}));//parsing body
app.use(express.json());
app.use(dweetRoutes);

connect(()=>{app.listen(3000, ()=>{
    console.log("Server connected");
})});