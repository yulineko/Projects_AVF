var win = Ti.UI.createWindow({
	backgroundColor: "#360041",
	// backgroundImage: "wallpaper.png",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
	// backgroundGradient: {type: "linear", startPoint: {x: "50%", y: "0%"}, endPoint: {x: "50%", y: "100%"}, 
						// colors: [{color: "#4d005d", offset: 0.0}, {color: "#000000", offset: 1.0}], }
	layout: "vertical"
});


var locationText = Ti.UI.createLabel({
	top: 150, 
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	color: "#fff"
});

var tempText = Ti.UI.createLabel({ 
	text: " ",
	font: {fontFamily: "AvenirNext-DemiBold", fontSize: 100},
	color: "#fff"
});

var weatherText = Ti.UI.createLabel({ 
	top: 1,
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	color: "#fff"
});

var feelText = Ti.UI.createLabel({
	top: 30, 
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#fff"
});

var humidText = Ti.UI.createLabel({
	top: 1, 
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#fff"
});

var highText = Ti.UI.createLabel({
	top: 1, 
	text: " ",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#fff"
});

var lowText = Ti.UI.createLabel({
	top: 1, 
	text: "...",
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 20},
	color: "#fff"
});

//populate UI
var buildUI = function(weatherInfo){
	locationText.text = weatherInfo.location;
	tempText.text = weatherInfo.temp + "ºF";
	weatherText.text = weatherInfo.weather;
	feelText.text = "Feels Like: " + weatherInfo.feelLike + "ºF";
	humidText.text = "Humidity: " + weatherInfo.humid;
	hightText = "High:" + weatherInfo.high + "Fº";
	lowText = "Low:" + weatherInfo.low + "Fº"; 
	day1 = weatherInfo.day1;
	day2 = weatherInfo.day2;
	day3 = weatherInfo.day3;
	icon1 = weatherInfo.icon1;
	icon2 = weatherInfo.icon2;
	icon3 = weatherInfo.icon3;
	high1 = weatherInfo.high1 + "Fº";
	high2 = weatherInfo.high2 + "Fº";
	high3 = weatherInfo.high3 + "Fº";
	low1 = weatherInfo.low1 + "Fº";
	low2 = weatherInfo.low2 + "Fº";
	low3 = weatherInfo.low3 + "Fº";
};

exports.buildUI = buildUI;

win.add(locationText);
win.add(tempText);
win.add(weatherText);
win.add(feelText);
win.add(humidText);
win.add(highText);
win.add(lowText);

win.open();