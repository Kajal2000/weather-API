var readline = require('readline-sync');
var user_input = readline.question("put your city Name ?");
const request = require("request")
request("https://api.openweathermap.org/data/2.5/weather?q="+user_input+"&appid=3a20d3800e1540e8a3f6fb331e91f796",function(err,res,body){
    var allData = JSON.parse(body);
    // console.log(allData);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var knex = require("./connecttion_db.js")

var country = allData['sys']['country']
var sunrise = allData['sys']['sunrise']
var sunset = allData['sys']['sunset']
var Name = allData["name"]

app.post('/postApi',(req,res)=>{
    var all_data = {
        cityName : Name,
        country : country,
        sunrise : sunrise,
        sunset : sunset,
        Date : new Date()
    }
    knex("data").insert(all_data)
    .then(() => {
        res.send("data insert")
    }).catch((err)=>{
        res.send(err)
    })
})

// Get API
app.get('/get',(req,res) => {
    knex.select("*").from("data")
    .then((got_data) => {
        res.send(got_data)
    }).catch((err)=>{
        res.send(err)
    })
})
// UPDATE API
app.put('/update/:id',(req,res)=>{
    var id = req.params.id 
    var all_data = {
        cityName : Name,
        country : country,
        sunrise : sunrise,
        sunset : sunset,
        Date : new Date()
    }
    knex("data")
    .where({id:id})
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