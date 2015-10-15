var getData = function(){

	var getGeo = require("geo");
	var url = "http://api.wunderground.com/api/d1e578e5aa05dc1d/geolookup/conditions/forecast/q/"+ getGeo.loc +".json";
	if (Ti.Network.online) {
	     var data = Ti.Network.createHTTPClient();
	     data.onload = function(e){
	          console.log(e);  
	          var weatherArray = JSON.parse(this.responseText);  
	          var weatherInfo = {
	          	  //current info
	          	  location: weatherArray.current_observation.display_location.full,
	          	  temp: weatherArray.current_observation.temp_f,
	          	  feelLike: weatherArray.current_observation.feelslike_f ,
	          	  weather: weatherArray.current_observation.weather,
	          	  humid: weatherArray.current_observation.relative_humidity,
	          	  high: weatherArray.forecast.simpleforecast.forecastday[0].high.fahrenheit,
	          	  low: weatherArray.forecast.simpleforecast.forecastday[0].high.fahrenheit,
	          	  //FORECAST
	          	  //days
	          	  day1: weatherArray.forecast.simpleforecast.forecastday[1].date.weekday,
	          	  day2: weatherArray.forecast.simpleforecast.forecastday[2].date.weekday,
	          	  day3: weatherArray.forecast.simpleforecast.forecastday[3].date.weekday,
	          	  //icons
	          	  icon1: weatherArray.forecast.simpleforecast.forecastday[1].icon_url,
	          	  icon2: weatherArray.forecast.simpleforecast.forecastday[2].icon_url,
	          	  icon3: weatherArray.forecast.simpleforecast.forecastday[3].icon_url,
	          	  //highs
	          	  high1: weatherArray.forecast.simpleforecast.forecastday[1].high.fahrenheit,
	          	  high2: weatherArray.forecast.simpleforecast.forecastday[2].high.fahrenheit,
	          	  high3: weatherArray.forecast.simpleforecast.forecastday[3].high.fahrenheit,
	          	  //lows
	          	  low1: weatherArray.forecast.simpleforecast.forecastday[0].low.fahrenheit,
	          	  low2: weatherArray.forecast.simpleforecast.forecastday[2].low.fahrenheit,
	          	  low3: weatherArray.forecast.simpleforecast.forecastday[3].low.fahrenheit,
	          };		
	          
	          //var db = require("db"); 
	          //db.save(location, temp, feelLike, weather, humid, high, low, day1, day2, day3, icon1, icon2, icon3, high1, high2, high3, low1, low2, low3);
	          		          
	          var ui = require("ui");
			  console.log(weatherInfo);	
	          ui.buildUI(weatherInfo);
	     }; 
	     data.open("GET", url);
	     data.send();
	}else{
	     alert("Network currently unavailable.");
	     timeout: 5000;
	}; 
};


exports.getData = getData;