import express from 'express';
import Connection from './database/db.js'
import Route from './route/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express()
const port = 8000;
app.use(cors());
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Route)
Connection()
app.listen(port , ()=>{
    console.log(`PORT running successfully in ${port}`);
})