var read = function(){
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id INTEGER PRIMARY KEY, location TEXT, temp TEXT, feelLike TEXT, weather TEXT, humid TEXT, high TEXT, low TEXT, day1 TEXT, day2 TEXT, day3 TEXT, high1 TEXT, high2 TEXT, high3 TEXT, low1 TEXT, low2 TEXT, low3 TEXT)");
	var dbResult = db.execute("SELECT * FROM stockTBL");
		while (dbResult.isValidRow()){
		var savedData = {
			location: dbResult.fieldByName("location"),
			temp: dbResult.fieldByName("temp"),
			feelLike: dbResult.fieldByName("feelLike"),
			weather: dbResult.fieldByName("weather"),
			humid: dbResult.fieldByName("humid"),
			high: dbResult.fieldByName("high"),
			low: dbResult.fieldByName("low"),
			day1: dbResult.fieldByName("day1"),
			day2: dbResult.fieldByName("day2"),
			day3: dbResult.fieldByName("day3"),
			// icon1: dbResult.fieldByName("icon1"),
			// icon2: dbResult.fieldByName("icon2"),
			// icon3: dbResult.fieldByName("icon3"),
			high1: dbResult.fieldByName("high1"),
			high2: dbResult.fieldByName("high2"),
			high3: dbResult.fieldByName("high3"),
			low1: dbResult.fieldByName("low1"),
			low2: dbResult.fieldByName("low2"), 
			low3: dbResult.fieldByName("low3")			
		};
		dbResult.next();
	}

	dbResult.close();
	db.close();
	ui.buildUI(savedData);
};

var save = function(savedData){
	console.log(savedData);
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (idINTEGER PRIMARY KEY, location TEXT, temp TEXT, feelLike TEXT, weather TEXT, humid TEXT, high TEXT, low TEXT, day1 TEXT, day2 TEXT, day3 TEXT, high1 TEXT, high2 TEXT, high3 TEXT, low1 TEXT, low2 TEXT, low3 TEXT)");
	db.execute("DELETE FROM stockTBL");
	db.execute("INSERT INTO stockTBL (location, temp, feelLike, weather, humid, high, low, day1, day2, day3, high1, high2, high3, low1, low2, low3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", savedData.location, savedData.temp, savedData.feelLike, savedData.weather, savedData.himid, savedData.high, savedData.low, savedData.day1, savedData.day2, savedData.day3, savedData.high1, savedData.high2, savedData.high3, savedData.low1, savedData.low2, savedData.low3);
	db.close();
	read(); 
};

exports.save = save;
exports.read = read;