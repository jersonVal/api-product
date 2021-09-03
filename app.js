import express from "express";
import config from 'config';
import bodyParser from 'body-parser';
import db from './model/db-connection/mongodb.js'

// ROUTES **************
import productRoute from "./routers/product.route.js";

const app = express();
db();

const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded({
    extended: true
});

const port = config.get('server-port');

app.use(jsonParser);
app.use(urlEncodeParser);

app.get('/', (req, res, next)=>{
    res.send(`<h1>Welcome to academic rest api</h1>`)
});

productRoute(app);

app.listen(port, ()=>{
    console.log('server is running')
});



