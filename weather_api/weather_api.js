var readline = require('readline-sync');
var user_input = readline.question("put your city Name ?");
const request = require("request")
request("https://api.openweathermap.org/data/2.5/weather?q="+user_input+"&appid=3a20d3800e1540e8a3f6fb331e91f796",function(err,res,body){
  var allData = JSON.parse(body);
//   console.log(allData)
var all_dic = {}
for (var i = 0; i <allData["weather"].length;i++){
    var weatherDescription = allData["weather"][i]["description"];
    var weatherMain = allData["weather"][i]["main"]

var weatherId = allData.id
var cityName = allData.name
var d = new Date();
var n = d.toDateString();
// console.log(n)
all_dic["date"]=n
all_dic["weatherId"]=weatherId
all_dic["cityName"]=cityName
all_dic["weatherDescription"]=weatherDescription
all_dic["weatherMain"]=weatherMain
console.log(all_dic)
}
})

