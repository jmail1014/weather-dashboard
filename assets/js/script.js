// pull up current weather
// pull up 5 day forecast
// display city history

var fiveDays =
  "https://api.openweathermap.org/data/2.5/forecast?q=charlotte&appid=a429567d899ab3aa7bff6aef548ae46b";
var apiKey = "a429567d899ab3aa7bff6aef548ae46b";

var tempEl = document.querySelector(".temp");
var searchbtnEl = document.querySelector("#searchBtn");
var searchCityEl = document.querySelector("#searchCity");
var searchHistoryEl = $("#search-history");
console.log(searchHistoryEl);
var cities = [];
var currentDate = moment().format("MMM Do YY");

var searchHandler = function (e) {
  e.preventDefault();
  var cityName = searchCityEl.value;
  getCurrentWeather(cityName);

  // this will store the city inside of local storage only if the city already exsist in local stoarge
  if (cities.indexOf(cityName) === -1) {
    cities.push(cityName);
    console.log(cities);
    localStorage.setItem("cities", JSON.stringify(cities));
    // else = if the city already exsists in local stoarge, don't do anything
  } else {
      return;
  }
};

var getCurrentWeather = function (cityName) {
  var currentWeather =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial" +
    "&appid=a429567d899ab3aa7bff6aef548ae46b";
  fetch(currentWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    //   tempEl.textContent = data.main.temp;
      // call api for one onecall api using lat long peramiters data.cord.lat.lon
      console.log(data);
      $("#cityNameDateIcon").text(cityName + " " + currentDate);
      $("#cityNameDateIcon").append(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>`);
      $("#currentTemp").text(data.main.temp);
      $("#currentWind").text(data.wind);
      $("#currentHumidity").text(data.main.humidity);
      // $("#currentUvIndex").text(data.)
    });
};
function searchHistory() {
    cities = JSON.parse(localStorage.getItem("cities"));

    for (let i = 0; i < cities.length; i++) {
        console.log(cities[i]);   

        searchHistoryEl.append(`<li><button class="btn btn-secondary btn-lg btn-block">${cities[i]}</button></li><br>`);
    }

};

searchbtnEl.addEventListener("click", searchHandler);

searchHistory();

//fetch(currentWeather)
//.then(function(response) {
//return response.json();
//})
//.then (function(data) {
//console.log(data);
//});

// request to the url
