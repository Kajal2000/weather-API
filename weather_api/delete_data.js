var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var knex = require("./connection.js")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NAVGURUKUL1",
    database: "weather"
});
connection.connect((err) => {
    if (!err)
        console.log("db connect")
    else
        console.log("not connect")
})
app.delete('/api',(req,res) => {
    var weather_1 = {
        weatherId : req.body.weatherId,
        cityName : req.body.cityName,
        weatherDescription : req.body.weatherDescription,
        weatherMain : req.body.weatherMain,
        date : req.body.date,
        id : req.body.id
    }
    knex("data")
    .where({id: req.body.id})
    .del(weather_1).then(() => {
        console.log("data delete")
    })
})
app.listen(8000,function(){
    console.log("port number 8000")
})