var win = Ti.UI.createWindow({
	backgroundImage: "wallpaper.png",
	statusBarStyle: Titanium.UI.iPhone.StatusBar.LIGHT_CONTENT,

});

var bgView = Ti.UI.createView({
	height: 305,
	width: "70%",
	top: "20%",
	backgroundColor: "#80ffffff",
	layout: "vertical"
});
var locationText = Ti.UI.createLabel ({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	color: "#3d1104",
	text: " ", 
	top: 25
});

var tempText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-DemiBold ", fontSize: 100},
	text: " ",
	top: 10,
	color: "#3d1104"
});

var weatherText = Ti.UI.createLabel({
	font: {fontFamily: "AvenirNext-UltraLight", fontSize: 30},
	text: " ",
	color: "#3d1104"
});	

var feelText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#3d1104",
	left: 15,
	top: 10
});

var humidText = Ti.UI.createLabel({
	font: {fontFamily: "Avenir-LightOblique", fontSize: 15},
	text: " ",
	color: "#3d1104",
	left: 15,
});

bgView.add(locationText, tempText, weatherText, feelText, humidText);

var buildUI = function(weatherInfo){
	locationText.text = weatherInfo.loc;
	tempText.text = weatherInfo.temp;
	weatherText.text = weatherInfo.weather;
	feelText.text = "FEELS LIKE: " + weatherInfo.feelLike + "ºF";
	humidText.text = "HUMIDITY: " + weatherInfo.humid; 
};

exports.buildUI = buildUI;

win.add(bgView);
win.open();



