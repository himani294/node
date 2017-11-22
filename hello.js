const express = require('express')
const app = express()
//for post data
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var data_controller = require('./DataController');


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/FetchAllData/', data_controller.FetchAllData);
app.post('/FetchData/',data_controller.FetchData);
app.get('/addData/',data_controller.addData);
app.post('/deleteData/',data_controller.deleteData);
app.post('/editData/',data_controller.editData);
app.listen(3000, () => console.log('Example app listening on port 3000!'));