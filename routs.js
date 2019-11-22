var readline = require('readline-sync');
var user_input = readline.question("put your city Name ?");
const request = require("request")
request("https://api.openweathermap.org/data/2.5/weather?q="+user_input+"&appid=3a20d3800e1540e8a3f6fb331e91f796",function(err,res,body){
    var allData_id = JSON.parse(body);
    var weather_id = allData_id.id 
    // console.log(weather_id)
request("https://openweathermap.org/data/2.5/forecast?id="+weather_id+"&appid=b6907d289e10d714a6e88b30761fae22",function(err,res,body_data){
    var allData_name = JSON.parse(body_data);
    console.log(allData_name)

var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var knex = require("./connecttion_db.js")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NAVGURUKUL1",
    database: "weather_api_details"
});

connection.connect((err) => {
    if (!err)
        console.log("db connect")
    else
        console.log("not connect")
}) 

app.get('/get',(req,res) => {
    knex.select("*").from("data").then((got_data) => {
        // res.send(allData_name)
        res.send(got_data)
})
})
app.post('/get',(req,res)=>{
    var all_data = {
        weatherId : req.body.weatherId,
        id : req.body.id,
        cityName : req.body.cityName,
        country : req.body.country,
        sunrise : req.body.sunrise,
        sunset : req.body.sunset
    }
    knex("data").insert(all_data).then(() => {
        console.log("data insert")
    })
})
app.put('/get',(req,res)=>{
    var all_data = {
        weatherId : req.body.weatherId,
        id : req.body.id,
        cityName : req.body.cityName,
        country : req.body.country,
        sunrise : req.body.sunrise,
        sunset : req.body.sunset
    }
    knex("data")
    .where({id:req.body.id})
    .update(all_data).then(() => {
        console.log("data put")
})
})
app.delete('/api',(req,res)=>{
    var all_data = {
        weatherId : req.body.weatherId,
        id : req.body.id,
        cityName : req.body.cityName,
        country : req.body.country,
        sunrise : req.body.sunrise,
        sunset : req.body.sunset
    }
    knex("data")
        .where({id:req.body.id})
        .del(all_data).then(() => {
            console.log("data delet ho gya id waise")
    })
})
app.listen(8011,function(){
    console.log("port number 8011")
})
})
})