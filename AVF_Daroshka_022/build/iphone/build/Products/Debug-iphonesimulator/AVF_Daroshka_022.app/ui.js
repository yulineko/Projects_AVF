var win = Ti.UI.createWindow({
	backgroundColor: "#360041",
	//backgroundImage: "wallpaper.png",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,
	// backgroundGradient: {type: "linear", startPoint: {x: "50%", y: "0%"}, endPoint: {x: "50%", y: "100%"}, 
						// colors: [{color: "#4d005d", offset: 0.0}, {color: "#000000", offset: 1.0}], }
	layout: "vertical"
});


//current conditions information
var bgView = Ti.UI.createView({
	height: 270,
	width: "70%",
	top: "20%",
	backgroundColor: "#0Dffffff",
	layout: "vertical"
});
var locationText = Ti.UI.createLabel ({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	color: "#fff",
	text: " ", 
	top: 25
});

var tempText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-DemiBold ", fontSize: 100},
	text: " ",
	top: 10,
	color: "#fff"
});

var weatherText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	text: " ",
	color: "#fff"
});	

bgView.add(locationText, tempText, weatherText);

var detailView = Ti.UI.createView({
	top: 5,
	width: "70%",
	height: 80,
	backgroundColor: "#0DFFFFFF",
	layout: "vertical"
});

var feelText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#fff",
});

var humidText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#fff",
});

var highText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#fff",
});	

var lowText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#fff",
});	

detailView.add(feelText, humidText, highText, lowText);

var days = Ti.UI.createView({
	height: 300, 
	width: 100, 
	top: 20, 
	bacggoundColor: "#000",
	left: 100
});

//populate UI
var buildUI = function(weatherInfo){
	locationText.text = weatherInfo.location;
	tempText.text = weatherInfo.temp + "ºF";
	weatherText.text = weatherInfo.weather;
	feelText.text = "FEELS LIKE: " + weatherInfo.feelLike + "ºF";
	humidText.text = "HUMIDITY: " + weatherInfo.humid;
	hightText = "HIGH:" + weatherInfo.high + "Fº";
	lowText = "LOW:" + weatherInfo.low + "Fº"; 
};

exports.buildUI = buildUI;

win.add(bgView, detailView, days);
win.open();


