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
    database: "weather_api"
});
connection.connect((err) => {
    if (!err)
        console.log("db connect")
    else
        console.log("not connect")
}) 
app.get('/api',(req,res) => {
    knex.select("*").from("data").then((got_data) => {
        res.send(got_data)
    })
})

app.listen(8000,function(){
    console.log("port number 8000")
})