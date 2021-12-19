//const express = require('express');
import express from 'express';

//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';

//const pino = require('express-pino-logger')();
import pino from 'express-pino-logger';

//const courses =require('./courses');
//import courses from './courses'
//import *  as courses from './courses';


//const cors =require("cors");
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(express.json());
app.use(express.urlencoded());


var corsOptions={
    origin:["http://localhost:4200", "http://localhost:4000","http://localhost:8000", "**"],
    redirect:"follow"

}

app.use(cors(corsOptions));



app.listen(8000, () =>{
    console.log("Server is started and listening")
})

//REST API Call
app.get("/",async (req, res)=>{
res.send("Hello Node,js !");
});

//Get all articles
//require("./courses")(app);

app.get("/courses", async(req,res)=>{
    console.log(courses);
      let result = await courses (req.headers);
     res.send(result);
    });