var getData = function(){

	var getGeo = require("geo");
	var url = "http://api.wunderground.com/api/d1e578e5aa05dc1d/geolookup/conditions/forecast/q/"+ getGeo.loc +".json";
	if (Ti.Network.online) {
	     var data = Ti.Network.createHTTPClient();
	     data.onload = function(e){
	          console.log(e);  
	          var weatherArray = JSON.parse(this.responseText);  
	          var weatherInfo = {
	          	  location: weatherArray.current_observation.display_location.full,
	          	  temp: weatherArray.current_observation.temp_f,
	          	  feelLike: weatherArray.current_observation.feelslike_f ,
	          	  weather: weatherArray.current_observation.weather,
	          	  humid: weatherArray.current_observation.relative_humidity,
	          	  high: weatherArray.forecast.simpleforecast.forecastday[0].high.fahrenheit,
	          	  low: weatherArray.forecast.simpleforecast.forecastday[0].high.fahrenheit,
	          	  day1: weatherArray.forecast.simpleforecast.forecastday[1].date.weekday,
	          	  day2: weatherArray.forecast.simpleforecast.forecastday[2].date.weekday,
	          	  day3: weatherArray.forecast.simpleforecast.forecastday[3].date.weekday,
	          	  icon1: weatherArray.forecast.simpleforecast.forecastday[1].icon_url,
	          	  icon2: weatherArray.forecast.simpleforecast.forecastday[2].icon_url,
	          	  icon3: weatherArray.forecast.simpleforecast.forecastday[3].icon_url,
	          	  high1: weatherArray.forecast.simpleforecast.forecastday[1].high.fahrenheit,
	          	  high2: weatherArray.forecast.simpleforecast.forecastday[2].high.fahrenheit,
	          	  high3: weatherArray.forecast.simpleforecast.forecastday[3].high.fahrenheit,
	          	  low1: weatherArray.forecast.simpleforecast.forecastday[0].low.fahrenheit,
	          	  low2: weatherArray.forecast.simpleforecast.forecastday[2].low.fahrenheit,
	          	  low3: weatherArray.forecast.simpleforecast.forecastday[3].low.fahrenheit,
	          };		
	          
	          var db = require("db"); 
	          db.save(weatherInfo);
			  console.log(weatherInfo);
	     }; 
	     data.open("GET", url);
	     data.send();
	}else{
	     alert("Network currently unavailable.");
	     timeout: 5000;
	}; 
};


exports.getData = getData;