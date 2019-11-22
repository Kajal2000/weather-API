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
})
})