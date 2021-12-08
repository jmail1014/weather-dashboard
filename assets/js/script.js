var currentWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a429567d899ab3aa7bff6aef548ae46b";
var fiveDays = "https://api.openweathermap.org/data/2.5/forecast?q=charlotte&appid=a429567d899ab3aa7bff6aef548ae46b";
var apiKey = "a429567d899ab3aa7bff6aef548ae46b";
var cityName;

//fetch(currentWeather)
//.then(function(response) {
    //return response.json();
//})
//.then (function(data) {
    //console.log(data);
//});

// request to the url
fetch(fiveDays)
.then(function(response) {
    return response.json();
})
.then (function(data) {
    console.log(data);
});
