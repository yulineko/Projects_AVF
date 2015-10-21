var ui = require("ui");

var read = function(){
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id INTEGER PRIMARY KEY, name TEXT, phone TEXT, address TEXT, crossStreet TEXT)");
	var dbResult = db.execute("SELECT * FROM stockTBL");
		while (dbResult.isValidRow()){
		var savedData = {
			name: dbResult.fieldByName("name"),
			phone: dbResult.fieldByName("phone"),
			address: dbResult.fieldByName("address"),
			crossStreet: dbResult.fieldByName("crossStreet"),
		};
		dbResult.next();
	}

	dbResult.close();
	db.close();
	ui.bUI(savedData);
};

var save = function(savedData){
	console.log(savedData);
	var db = Ti.Database.open("stockDB");
	db.execute("CREATE TABLE IF NOT EXISTS stockTBL (id INTEGER PRIMARY KEY, name TEXT, phone TEXT, address TEXT, crossStreet TEXT)");
	db.execute("DELETE FROM stockTBL");
	for(i=0, j=savedData.length; i<j; i++){
		db.execute("INSERT INTO stockTBL (name, phone, address, crossStreet) VALUES (?, ?, ?, ?)", savedData.name, savedData.phone, savedData.address, savedData.crossStreet);
	};	
	
	db.close();
	read(); 
};

exports.save = save;
exports.read = read;