// var read = function(e){
	// var db = Ti.Database.open("stockDB");
	// var dbResult = db.execute("SELECT id, location, temp, feelLike, weather, humid, high, low, day1, day2, day3, high1, high2, high3, low1, low2, low3 FROM stockTBL");
	// while (dbResult.isValidRow()){
		// var savedData = {
			// id: dbResult.fieldByName("id"),
			// location: dbResult.fieldByName("location"),
			// temp: dbResult.fieldByName("temp"),
			// feelLike: dbResult.fieldByName("feelLike"),
			// weather: dbResult.fieldByName("weather"),
			// humid: dbResult.fieldByName("humid"),
			// high: dbResult.fieldByName("high"),
			// low: dbResult.fieldByName("low"),
			// day1: dbResult.fieldByName("day1"),
			// day2: dbResult.fieldByName("day2"),
			// day3: dbResult.fieldByName("day3"),
			// high1: dbResult.fieldByName("high1"),
			// high2: dbResult.fieldByName("high2"),
			// high3: dbResult.fieldByName("high3"),
			// low1: dbResult.fieldByName("low1"),
			// low2: dbResult.fieldByName("low2"), 
			// low3: dbResult.fieldByName("low3"),			
		// };
		// dbResult.next();
	// }
	// dbResult.close();
	// db.close;
// };
// 
// var save = function(savedData){
	// console.log(savedData);
	// var db = Ti.Database.open("stockDB");
	// database.execute("");
	// database.execute("DELETE FROM stockTBL");
	// datatbase.execute("INSERT INTO stockTBL (location, temp, feelLike, weather, humid, high, low, day1, day2, day3, high1, high2, high3, low1, low2, low3) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) weatherInfo.location, weatherInfo.temp, weatherInfo.feelLike, weatherInfo.weather, weatherInfo.himid, weatherInfo.high, weatherInfo.low, weatherInfo.day1, weatherInfo.day2, weatherInfo.day3, weatherInfo.high1, weatherInfo.high2, weatherInfo.high3, weatherInfo.low1, weatherInfo.low2, weatherInfo.low3);  
// 	
// 	
// 	
// };