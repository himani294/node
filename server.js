const express = require('express')
const app = express()
//for post data
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

global.conn = require("./config/connection.js");
global.model = require("./models");
global.controller = require("./controllers");

//var data_controller = require('./DataController');
app.get('/fetchAllData/', controller.User.FetchAllData);
app.post('/addData/', controller.User.addData);
app.post('/editData/', controller.User.editData);
app.post('/deleteData/', controller.User.deleteData);

app.listen(3000);