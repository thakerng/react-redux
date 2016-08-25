"use strict";

const express = require('express');
const PORT = process.env.PORT||'3000';
const path = require('path');
const logger = require('morgan');
let app = express();

app.use(logger('dev'));
app.use('/public/dist',express.static(path.resolve(__dirname,'../public/dist/')));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../index.html'));
});

app.listen(PORT,()=>{
    console.log(`Listening ${PORT} ....`);
});